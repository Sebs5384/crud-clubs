import ITeams from "./ITeams";
import IErrorResponse from "./IErrorResponse";

export default interface ITeamsState {
    loading: boolean | null;
    teamsData: ITeams | null;
    teamError: IErrorResponse | null;
};