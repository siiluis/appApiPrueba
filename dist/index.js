"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const usuario_route_1 = __importDefault(require("./src/usuarios/usuario.route"));
const publicacion_route_1 = __importDefault(require("./src/publicaciones/publicacion.route"));
const log_route_1 = __importDefault(require("./src/logs/log.route"));
const app = express_1.default();
const port = 3200;
app.use(morgan_1.default("dev"));
app.use("/usuarios", usuario_route_1.default);
app.use("/publicaciones", publicacion_route_1.default);
app.use("/logs", log_route_1.default);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello World!");
}));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
