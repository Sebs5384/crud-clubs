import { ITeams } from "../interfaces/index";
const BASE_URL = "http://localhost:5000";

async function getTeams(): Promise<ITeams> {
    const teamsUrl = `${BASE_URL}/api/teams`;

    try {
        const response = await fetch(teamsUrl);

        const teams = await response.json();
        return teams;
    } catch (error) {
        throw new Error(String(error));
    };
};

export {
    getTeams
};