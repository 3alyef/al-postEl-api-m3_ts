import express from "express";
import cors from "cors";
import router from "./routes/Routes";

class Server {
    public server: express.Application;
    private ALLOW: string;
    constructor(){
        this.ALLOW = process.env.URL_M2 || "http://localhost:8888";
        this.server = express();
        this.jsonParse();
        this.setupCors();
        this.routes();
    }

    private jsonParse(): void {
        this.server.use(express.json())
    }

    private setupCors(): void {
        this.server.use((req: express.Request, res: express.Response, next)=>{
            res.header("Access-Control-Allow-Origin", this.ALLOW );
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
            this.server.use(cors());
            next();
        })
    }
    private routes(): void {
        this.server.use(router)
    }
}

export default Server;