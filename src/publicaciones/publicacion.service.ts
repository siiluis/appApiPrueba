import axios from "axios";
import { Log } from "../logs/log.model";
import LogService from "../logs/log.service";

class PublicacionService {
  public async all() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const requestOutput = await axios(url);
    LogService.saveLog(
      new Log(requestOutput.request.method, "List-Publicaciones", url)
    );
    return requestOutput.data;
  }
}

const publicacionService = new PublicacionService();
export default publicacionService;
