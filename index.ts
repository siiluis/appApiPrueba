import express from "express";
import morgan from "morgan";

import UserRoutes from "./src/usuarios/usuario.route";
import PublicacionRoutes from "./src/publicaciones/publicacion.route";
import LogRoutes from "./src/logs/log.route";

const app = express();
const port = 3200;

app.use(morgan("dev"));
app.use("/usuarios", UserRoutes);
app.use("/publicaciones", PublicacionRoutes);
app.use("/logs", LogRoutes);

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
