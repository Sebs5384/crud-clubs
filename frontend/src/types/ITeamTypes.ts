import ErrorResponse from "./IErrorTypes"

interface IArea {
    id: number,
    name: string
};

interface ITeam {
    id: number,
    area: IArea,
    name: string,
    shortName: string,
    tla: string,
    crestUrl: string,
    address: string,
    phone: string,
    website: string,
    email: string,
    founded: number,
    clubColors: string,
    venue: string,
    lastUpdated: string
};

interface ITeamState {
    loading: boolean | null;
    teamData: ITeam | null;
    teamError: ErrorResponse | null;
};

type ITeamAction = {
    type: string,
    payload: ITeam | ErrorResponse | null
};

export type { ITeam, ITeamState, ITeamAction };