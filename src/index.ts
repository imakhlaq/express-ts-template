import express, { Express } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";

import "express-async-errors"; // <---------- apply async error patch
//because of this u don't have to do next(throw new Error("error"))
//U can directly throw an error. And it will be in your error middleware

const PORT = 300;

const app: Express = express();

//json parser
app.use(express.json());

//form data parser
app.use(express.urlencoded());

//cors enable (you can configure it)
app.use(cors());

//your own error handler if you throw any error in sync method it will be received here.
app.use(errorHandler);

app.listen(PORT, () => console.log("Server started"));
