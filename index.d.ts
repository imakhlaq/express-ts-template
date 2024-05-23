//extending the request so it can hold auth user id
import { Express, Request } from "express";

declare global {
  namespace Express {
    interface Request {
      customField?: string;
    }
  }
}
