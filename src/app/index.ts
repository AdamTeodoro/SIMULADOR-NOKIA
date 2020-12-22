import express from 'express';
import bodyParser from "body-parser";

import { router } from './routes';

class Server {
    private app = express();
    
    /**
     * Ajusta as portas do servidor
     */
    private normalizePort(port: number | string) {
        return port || process.env.PORT
    }
    
    /**
     * Prepara o servidor
     */
    private loadServer() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static('html'));
        this.app.use(router);
    }
    
    /**
     * Inicia o servidor 
     */
    public startServer(port: number | string) {
        this.loadServer();

        this.app.listen(port, () => {
            console.log("Rodando na porta " + this.normalizePort(port));
        });
    }

}

const server = new Server();

server.startServer(3000);
