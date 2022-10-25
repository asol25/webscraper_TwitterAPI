import { NextFunction, Request, Response, Router } from "express";
import { apiAdvoceteList } from "../module/advocate_list/router";
export const apiRouter = Router();

apiRouter.use("/", (req: Request, res: Response, next: NextFunction) => {
    next();
});

apiRouter.use('/advocates', apiAdvoceteList);