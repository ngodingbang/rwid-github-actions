import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log(process.env.NODE_ENV);

    return next();
  },
  (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Welcomee" });
  },
);

app.listen(port, () => {
  console.info(`[server]: Server is running at http://localhost:${port}`);
});
