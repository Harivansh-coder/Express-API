"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
        });
        next();
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.default = validateRequest;
//# sourceMappingURL=validate.js.map