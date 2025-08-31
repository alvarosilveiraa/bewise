import rateLimit, { ipKeyGenerator } from "express-rate-limit";
import { tooManyRequestsException } from "@/exceptions/tooManyRequests";

// import { AuthRequest } from "@/types/AuthRequest";

// TODO:
// export const authLimiterMiddleware = rateLimit({
//   max: 100,
//   windowMs: 60 * 1000,
//   message: tooManyRequestsException,
//   keyGenerator: (req: AuthRequest) => req.token!.sub!,
// });

export const publicLimiterMiddleware = rateLimit({
  max: 60,
  windowMs: 60 * 1000,
  message: tooManyRequestsException,
  keyGenerator: req => ipKeyGenerator(req.ip!),
});

// TODO:
// export const sensitiveLimiterMiddleware = rateLimit({
//   max: 20,
//   windowMs: 60 * 1000,
//   message: tooManyRequestsException,
//   keyGenerator: (req: AuthRequest) => req.token?.sub || ipKeyGenerator(req.ip!),
// });
