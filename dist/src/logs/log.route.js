"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const log_controller_1 = __importDefault(require("./log.controller"));
class LogRoutes {
    constructor() {
        this.enrutador = express_1.Router();
        this.config();
    }
    config() {
        this.enrutador.get("/", log_controller_1.default.all);
        this.enrutador.get("/exports", log_controller_1.default.exportLogs);
        this.enrutador.delete("/:id", log_controller_1.default.deleteLog);
    }
}
const logRoutes = new LogRoutes();
exports.default = logRoutes.enrutador;
