import { Request, Response } from "express";
import PublicacionesService from "./publicacion.service";

class UserCtrl {
  public async all(req: Request, res: Response) {
    res.status(200).json(await PublicacionesService.all());
  }
}

const userCtrl = new UserCtrl();
export default userCtrl;
