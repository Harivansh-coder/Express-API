"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = __importDefault(require("../controllers/contact"));
const validate_1 = __importDefault(require("../middleware/validate"));
const validation_1 = require("../utility/validation");
// Create a router
const router = express_1.default.Router();
// POST /contact
router.post("/", (0, validate_1.default)(validation_1.validationSchema), contact_1.default);
exports.default = router;
//# sourceMappingURL=contact.js.map