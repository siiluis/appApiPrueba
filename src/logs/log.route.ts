import { Router } from "express";

import logCtrl from "./log.controller";

class LogRoutes {
  public enrutador: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.enrutador.get("/", logCtrl.all);
    this.enrutador.get("/exports", logCtrl.exportLogs);
    this.enrutador.delete("/:id", logCtrl.deleteLog);
  }
}

const logRoutes = new LogRoutes();

export default logRoutes.enrutador;
