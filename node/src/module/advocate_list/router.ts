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

const getAdvocateListBySearch = async (req: Request, res: Response) => {
    const { search } = req.params;
    if (search === "")
        return res.status(404).json(null);
    const urlGetAdvocateList = `https://cados.up.railway.app/advocates/${search}`;
    const response = await fetch(urlGetAdvocateList, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    const json = await response.json();

    if (!json)
        throw new Error("Error handling response: " + JSON.stringify(json));

    res.status(200).json({ advocates: [json.advocate] });
}

const getAdvocateListByPage = async (req: Request, res: Response) => {
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
apiAdvoceteList.get("/search/:search", getAdvocateListBySearch);
apiAdvoceteList.get("/page/:page", getAdvocateListByPage);