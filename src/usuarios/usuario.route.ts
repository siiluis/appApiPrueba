import { Router } from "express";

import userCtrl from "./usuario.controller";

class UserRoutes {
  public enrutador: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.enrutador.get("/", userCtrl.all);
  }
}

const userRoutes = new UserRoutes();

export default userRoutes.enrutador;
