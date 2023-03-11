"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// rate limit middleware to limit requests to 5 per minute
const rateLimitMiddleware = (req, res, next) => {
    const limiter = (0, express_rate_limit_1.default)({
        windowMs: 1 * 60 * 1000,
        max: 5,
        message: "Too many requests, please try again in an hour",
    });
    limiter(req, res, next);
};
exports.default = rateLimitMiddleware;
//# sourceMappingURL=ratelimit.js.map