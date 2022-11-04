import { Express } from 'express';
import productRouter from './products/router';
import authRouter from './auth/router';
import categoriesRouter from './categories/router';
import toyRouter from './toys/router';

const router = (app: Express) => {
    app.use("/auth", authRouter);
    app.use("/products", productRouter);
    app.use("/categories", categoriesRouter);
    app.use("/toy", toyRouter);
}

export default router;

