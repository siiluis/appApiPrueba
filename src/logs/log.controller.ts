import { Request, Response } from "express";
import LogsService from "./log.service";

class LogCtrl {
  public async all(req: Request, res: Response) {
    res.status(200).json(await LogsService.all());
  }

  public async exportLogs(req: Request, res: Response) {
    res.status(200).json(await LogsService.exportBase64());
  }

  public async deleteLog(req: Request, res: Response) {
    const { id } = req.params;
    await LogsService.deleteLog(id);
    res.status(200).send("Log Eliminado");
  }
}

const logCtrl = new LogCtrl();
export default logCtrl;
