import { Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";

const getTeams = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await fs.readFile(path.join(__dirname, "../../data/teams.db.json"), "utf8");
        const teams = JSON.parse(data);

        res.status(200).json(teams);
    } catch (err) {
        console.error(err);
        
        res.status(500).json({ error: "Internal server error, failed to read file", details: err });
    };
};

export {
    getTeams
};