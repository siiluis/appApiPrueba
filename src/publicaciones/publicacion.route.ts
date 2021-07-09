import { Router } from "express";

import publicacionCtrl from "./publicacion.controller";

class PublicacionRoutes {
  public enrutador: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.enrutador.get("/", publicacionCtrl.all);
  }
}

const publicacionRoutes = new PublicacionRoutes();

export default publicacionRoutes.enrutador;
