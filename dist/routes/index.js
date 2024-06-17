"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("reflect-metadata");
const danhmucRouter_1 = __importDefault(require("./danhmucRouter"));
const router = (0, express_1.Router)();
router.use('/danh-muc', danhmucRouter_1.default);
exports.default = router;
