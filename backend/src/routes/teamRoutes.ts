import { Router } from "express";
import { getTeam } from "../controllers/teamController";

const teamRouter = Router();

teamRouter.get("/team/:id", getTeam);

export default teamRouter;