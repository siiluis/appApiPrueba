import { Request, Response } from "express";
import UsuariosService from "./usuario.service";

class UserCtrl {
  public async all(req: Request, res: Response) {
    res.status(200).json(await UsuariosService.all());
  }
}

const userCtrl = new UserCtrl();
export default userCtrl;
