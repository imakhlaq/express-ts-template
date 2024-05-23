import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

/**
 * your own error handler if you throw any error in sync method it will be received here
 * @param err
 * @param req
 * @param res
 * @param next
 */
export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};
