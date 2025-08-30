import { Exception } from "@bewise/common/Exception";
import { NextFunction, Request, Response } from "express";
import { internalErrorException } from "@/exceptions/internalError";

export const exceptionMiddleware = (
  error: unknown,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) return next(error);
  if (error instanceof Exception) {
    const { status, message, details } = error;
    error.setDetails(undefined);
    res.status(status).json({ status, message, details });
  } else {
    const { status, message } = internalErrorException;
    res.status(status).json({ status, message, details: error });
  }
};
