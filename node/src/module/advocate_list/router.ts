import { Request, Response, Router } from "express";
import fetch from 'cross-fetch';
export const apiAdvoceteList = Router();

const getAdvocateList = async (req: Request, res: Response) => {
    const urlGetAdvocateList = "https://cados.up.railway.app/advocates/";

    const response = await fetch(urlGetAdvocateList, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    const json = await response.json();

    if (!json)
        throw new Error("Error handling response: " + JSON.stringify(json));


    res.status(200).json(json);
}

const getAdvocateByPage = async (req: Request, res: Response) => {
    const { page } = req.params;
    const urlGetAdvocateList = `https://cados.up.railway.app/advocates?page=${page}`;
    const response = await fetch(urlGetAdvocateList, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    const json = await response.json();

    if (!json)
        throw new Error("Error handling response: " + JSON.stringify(json));

    res.status(200).json(json);
}


apiAdvoceteList.get("/", getAdvocateList);
apiAdvoceteList.get("/:page", getAdvocateByPage);