import { Express } from 'express';
import authRouter from './auth/router';
import gamesRouter from './videoGames/router';
import toyRouter from './toys/router';

const router = (app: Express) => {
    app.use("/auth", authRouter);
    app.use("/videoGames", gamesRouter);
    app.use("/toy", toyRouter);
}

export default router;

