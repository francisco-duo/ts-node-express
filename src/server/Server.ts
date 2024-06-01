/*
    Código base do servidor do express
*/

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()

const server: Express = express();
const port = process.env.PORT;

/* Configuração do servidor */
server.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

export { server, port };
