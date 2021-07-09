"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = __importDefault(require("./usuario.controller"));
class UserRoutes {
    constructor() {
        this.enrutador = express_1.Router();
        this.config();
    }
    config() {
        this.enrutador.get("/", usuario_controller_1.default.all);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.enrutador;
