import { IErrorResponse, ITeams, ITeamsState, ITeamsAction } from "../interfaces/index";

const initialTeamsState: ITeamsState = {
    loading: null,
    teamsData: null,
    teamError: null,
};

function teamsReducer(state: ITeamsState = initialTeamsState, action: ITeamsAction) {
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
                teamsData: payload as ITeams,
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
    teamsReducer,
    initialTeamsState
};