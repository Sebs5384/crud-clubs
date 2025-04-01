import express, { Request, Response } from 'express';
import teamsRouter from './routes/teamsRoutes';
import teamRouter from './routes/teamRoutes';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use("/api", teamsRouter);
app.use("/api", teamRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
