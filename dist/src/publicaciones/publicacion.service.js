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
const axios_1 = __importDefault(require("axios"));
const log_model_1 = require("../logs/log.model");
const log_service_1 = __importDefault(require("../logs/log.service"));
class PublicacionService {
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = "https://jsonplaceholder.typicode.com/posts";
            const requestOutput = yield axios_1.default(url);
            log_service_1.default.saveLog(new log_model_1.Log(requestOutput.request.method, "List-Publicaciones", url));
            return requestOutput.data;
        });
    }
}
const publicacionService = new PublicacionService();
exports.default = publicacionService;
