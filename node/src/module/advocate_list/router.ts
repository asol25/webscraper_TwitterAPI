import { Request, Response, Router } from "express";
export const apiAdvoceteList = Router();

apiAdvoceteList.get('/', async (req: Request, res: Response) => {
    console.log({
        "message": "GET '/' apiAdvoceteList"
    });
    try {
        const urlGetAdvocateList = 'https://cados.up.railway.app/advocates/';
        console.log(urlGetAdvocateList);

        const response = await fetch(urlGetAdvocateList, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        })

        const json = await response.json();
        console.log({ json });

        if (!json)
            throw new Error("Error handling response: " + JSON.stringify(json));

        return res.status(200).json(json);
    } catch (error: any) {
        console.error(error);
        res.status(500).json(error.message);
    }
})


apiAdvoceteList.get('/:page', async (req: Request, res: Response) => {
    console.log({
        "message": "GET '/:page' apiAdvoceteList"
    });
    const { page } = req.params;
    console.log({ page });

    try {
        const urlGetAdvocateList = `https://cados.up.railway.app/advocates?page=${page}`;
        const response = await fetch(urlGetAdvocateList, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        })

        const json = await response.json();

        if (!json)
            throw new Error("Error handling response: " + JSON.stringify(json));

        return res.status(200).json(json);
    } catch (error: any) {
        console.error(error);
        res.status(500).json(error.message);
    }
})
