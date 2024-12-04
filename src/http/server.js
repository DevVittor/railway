import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import compression from "compression";
import cors from "cors";

import { createServer } from "node:http";
const serverHTTP = createServer(app);

import router from "../routes/v1/index.js";
import conn from "../database/conn.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.disable("x-powered-by");

app.use("/api/v1/", (req, _, next) => {
  console.log(`Path: ${req.path} | Method: ${req.method}`);
  next();
});
app.use("/api/v1/", router);

const port = process.env.PORT;

serverHTTP.listen(port, async () => {
  console.log(`O servidor está rodando na porta ${port}.`);
  await conn();
});