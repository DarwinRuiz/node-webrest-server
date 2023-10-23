import express, { Router } from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { ServerOptions } from '../interfaces/server-options';

export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly router: Router;

    constructor(options: ServerOptions) {
        const { port, router, public_path = 'public' } = options;

        this.port = port;
        this.publicPath = public_path;
        this.router = router;
    }

    async start() {


        // Middlewares
        this.app.use(express.json()); // raw json
        this.app.use(express.urlencoded({ extended: true })) // x-www-form-urlencoded

        // Public Folder
        this.app.use(express.static(this.publicPath));

        // Routes
        this.app.use(this.router);


        // SPA Routes solutions
        this.app.get('*', (request: Request, response: Response) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            response.sendFile(indexPath);
        });

        this.app.listen(this.port, () => {
            console.info(`Server listening on port ${this.port}`);
        });
    }
}