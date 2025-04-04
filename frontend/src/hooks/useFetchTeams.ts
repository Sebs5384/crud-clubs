import { useReducer, useEffect } from "react";
import { teamsReducer, initialTeamsState } from "../reducers/teamReducer";
import { getTeams } from "../api/teams";
import { ITeamsState } from "../interfaces/index";

function useFetchTeams() {
    const [state, dispatch] = useReducer(teamsReducer, initialTeamsState as ITeamsState);

    useEffect(() => {
        const fetchTeams = async () => {
            dispatch({ type: "FETCH_TEAM_REQUEST", payload: null });

            try {
                const teamsData = await getTeams();
                dispatch({ type: "FETCH_TEAM_SUCCESS", payload: teamsData });
            } catch (error) {
                if (error instanceof Error) {
                    dispatch({ type: "FETCH_TEAM_FAILURE", payload: { message: error.message } });
                };
            }
        };

        fetchTeams();
    }, []);

    return {
        loadingTeams: state.loading,
        teamsData: state.teamsData,
        teamsError: state.teamError
    };
};

export default useFetchTeams;