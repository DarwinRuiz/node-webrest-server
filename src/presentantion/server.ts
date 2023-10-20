import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { ServerOptions } from '../interfaces/server-options';

export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;

    constructor(options: ServerOptions) {
        const { port, public_path = 'public' } = options;

        this.port = port;
        this.publicPath = public_path
    }

    async start() {


        // Middlewares

        // Public Folder
        this.app.use(express.static(this.publicPath));

        this.app.get('*', (request: Request, response: Response) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            response.sendFile(indexPath);
        });

        this.app.listen(this.port, () => {
            console.info(`Server listening on port ${this.port}`);
        });
    }
}