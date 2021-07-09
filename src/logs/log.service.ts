import axios from "axios";
import getConexionDb from "../utils/database";
import { Log } from "./log.model";

class LogService {
  public async saveLog(registro: Log) {
    const conexion = await getConexionDb();
    conexion.execute(
      "INSERT INTO logs (methodQuery,endpoint,dataReturn) VALUES (?, ?, ? )",
      [registro.methodQuery, registro.endPoint, registro.dataReturn]
    );
  }

  public async all() {
    const conexion = await getConexionDb();
    const [rows, fields] = await conexion.execute("SELECT * FROM  logs");
    return rows;
  }

  async exportBase64() {
    const logsRow = JSON.stringify(await this.all());
    return Buffer.from(logsRow).toString("base64");
  }

  async deleteLog(id: string) {
    const conexion = await getConexionDb();
    conexion
      .execute("DELETE  FROM `logs` WHERE `id` = ?", [id])
      .then((resultDelete) => resultDelete);
  }
}

const logService = new LogService();
export default logService;
