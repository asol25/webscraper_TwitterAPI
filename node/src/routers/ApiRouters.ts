import { NextFunction, Request, Response, Router } from "express";
import { apiAdvoceteList } from "../module/advocate_list/router";
const apiRouter = Router();

// apiRouter.use("/", (req: Request, res: Response, next: NextFunction) => {
//     res.send({
//         "status": 200,
//         "message": "Hello world!"
//     })
//     next();
// });

apiRouter.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        console.error(err.stack);
        return res.status(500).send('Something broke!');
    }
    next();
})


apiRouter.use('/', apiAdvoceteList);

export { apiRouter };