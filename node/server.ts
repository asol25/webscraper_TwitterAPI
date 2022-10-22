import express, { Application, Request, Response } from "express";
import { createServer } from "http";
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import helmet from 'helmet';
// import morgan from 'morgan';
dotenv.config();
const app: Application = express();
const PORT = 8000;
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});

app.use(helmet());
// Config cors Middleware
// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: "Hello World!",
    });
});

try {
    httpServer.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at ${PORT}`);
    });
} catch ({ message }) {
    console.error(`Error occurred: ${message}`);
}

export { io };