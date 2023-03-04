import { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";

// rate limit middleware to limit requests to 5 per minute
const rateLimitMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "Too many requests, please try again in an hour",
  });

  limiter(req, res, next);
};

export default rateLimitMiddleware;
