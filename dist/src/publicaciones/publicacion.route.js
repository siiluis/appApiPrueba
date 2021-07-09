"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacion_controller_1 = __importDefault(require("./publicacion.controller"));
class PublicacionRoutes {
    constructor() {
        this.enrutador = express_1.Router();
        this.config();
    }
    config() {
        this.enrutador.get("/", publicacion_controller_1.default.all);
    }
}
const publicacionRoutes = new PublicacionRoutes();
exports.default = publicacionRoutes.enrutador;
