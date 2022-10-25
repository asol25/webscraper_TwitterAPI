import express, { Application } from "express";
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from "morgan";
import { apiRouter } from "./src/routers/ApiRouters";
import cors from "cors";
dotenv.config();
const app: Application = express();
const PORT = 8000;

app.use(cors());
app.use(morgan('combined'));
app.use(helmet());
// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", apiRouter);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at ${PORT}`);
});
