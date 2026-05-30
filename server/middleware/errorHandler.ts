import { Request, Response, NextFunction } from 'express';

export interface CustomError extends Error {
  status?: number;
  message: string;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  console.error(`[ERROR] ${status}: ${message}`, err);

  res.status(status).json({
    success: false,
    error: {
      status,
      message,
      timestamp: new Date().toISOString(),
    },
  });
};

export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};