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
const database_1 = __importDefault(require("../utils/database"));
class LogService {
    saveLog(registro) {
        return __awaiter(this, void 0, void 0, function* () {
            const conexion = yield database_1.default();
            conexion.execute("INSERT INTO logs (methodQuery,endpoint,dataReturn) VALUES (?, ?, ? )", [registro.methodQuery, registro.endPoint, registro.dataReturn]);
        });
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const conexion = yield database_1.default();
            const [rows, fields] = yield conexion.execute("SELECT * FROM  logs");
            return rows;
        });
    }
    exportBase64() {
        return __awaiter(this, void 0, void 0, function* () {
            const logsRow = JSON.stringify(yield this.all());
            return Buffer.from(logsRow).toString("base64");
        });
    }
    deleteLog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conexion = yield database_1.default();
            conexion
                .execute("DELETE  FROM `logs` WHERE `id` = ?", [id])
                .then((resultDelete) => resultDelete);
        });
    }
}
const logService = new LogService();
exports.default = logService;
