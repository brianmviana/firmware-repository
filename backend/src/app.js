import {} from 'dotenv/config';
import express from "express";
import routes from "./routes";
import './database'
import path from "path";
import cors from "cors";

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());//cors({origin : "url_frontend)"})
        this.server.use(express.json());
        this.server.use(express.urlencoded({extended : true}));
        this.server.use("/files", express.static(path.resolve(__dirname, "..","tmp","uploads")));
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;