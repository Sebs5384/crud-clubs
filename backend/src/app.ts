import express, { Request, Response } from 'express';
import teamsRouter from './routes/teamsRoutes';
import teamRouter from './routes/teamRoutes';
import cors from "cors";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use("/api", teamsRouter);
app.use("/api", teamRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
