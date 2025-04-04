import { ITeams, IErrorResponse } from "./index";

export default interface ITeamsAction {
    type: string,
    payload: ITeams | IErrorResponse | null
};