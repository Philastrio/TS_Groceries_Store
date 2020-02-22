import * as express from "express";
import { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ hello: "world" });
});

export const server = () => {
  app.listen(process.env.PORT);
  console.log(`Server started at http://localhost:${process.env.PORT}`);
};
