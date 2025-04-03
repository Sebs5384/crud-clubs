import { IErrorResponse, ITeam, ITeamState, ITeamAction } from "../types/index";

const initialTeamState: ITeamState = {
    loading: null,
    teamData: null,
    teamError: null,
};

function teamReducer(state: ITeamState = initialTeamState, action: ITeamAction) {
    const { type } = action;

    switch(type) {
        case 'FETCH_TEAM_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_TEAM_SUCCESS': { 
            const { payload } = action;
            return {
                ...state,
                loading: false,
                teamData: payload as ITeam,
            };
        };
        case 'FETCH_TEAM_FAILURE': {
            const { payload } = action;
            return {
                ...state,
                loading: false,
                teamError: payload as IErrorResponse,
            };
        };
        default:
            return state;
    };
};

export {
    teamReducer,
    initialTeamState
};