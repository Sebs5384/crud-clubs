import { Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";

const getTeam = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await fs.readFile(path.join(__dirname, "../../data/teams.db.json"), "utf8");
        const teams = JSON.parse(data);
        const team = teams.find((team: { id: number }) => team.id == Number(req.params.id));

        res.status(200).json(team);
    } catch (error) {
        console.error(error);

        res.status(500).json({ error: "Internal server error, failed to read file", details: error });
    };
};

export {
    getTeam
};