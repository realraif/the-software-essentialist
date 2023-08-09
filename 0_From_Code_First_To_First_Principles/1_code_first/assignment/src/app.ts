import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import { BadRequestError, NotFoundError } from "./errorHandlers";

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  
  if (err instanceof BadRequestError) {
    return res.status(400).json({ message: err.message });
  }

  if (err instanceof NotFoundError) {
    return res.status(404).json({ message: err.message });
  }
  
  res.status(500).json({ message: err });
});

export default app;
