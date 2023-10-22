import { Server } from "./presentantion/server";
import { envs } from './config/envs';
import { AppRoutes } from "./presentantion/routes";

(async () => {
    main();
})();

function main() {
    const server = new Server({ port: envs.PORT, public_path: envs.PUBLIC_PATH, router: AppRoutes.routes });
    server.start();
}
