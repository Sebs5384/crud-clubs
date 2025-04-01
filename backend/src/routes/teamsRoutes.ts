import { Router } from "express";
import { getTeams } from "../controllers/teamsController";

const teamsRouter = Router();

teamsRouter.get("/teams", getTeams);

export default teamsRouter;