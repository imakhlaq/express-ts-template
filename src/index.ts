import express, { Express } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";

import "express-async-errors"; // <---------- apply async error patch
/*
Because of this u don't have to do next(throw new Error("error")).
U can directly throw an error. And it will be in your error middleware.
 */
import path from "path";

const PORT = 300;

const app: Express = express();

//json parser
app.use(express.json());

//serving static files
app.use(express.static(path.join(__dirname, "public")));

//form data parser
app.use(express.urlencoded());

//cors enable (you can configure it)
app.use(cors());

//your own error handler if you throw any error in sync method it will be received here.
app.use(errorHandler);

app.listen(PORT, () => console.log("Server started"));
