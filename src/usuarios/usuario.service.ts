import axios from "axios";
import { Log } from "../logs/log.model";
import LogService from "../logs/log.service";
class UserService {
  public async all() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const requestOutput = await axios(url);
    LogService.saveLog(
      new Log(requestOutput.request.method, "Lista-Usuarios", url)
    );
    return requestOutput.data;
  }
}

const userService = new UserService();
export default userService;
