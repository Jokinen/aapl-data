import express from "express";
import cors from "cors";

import configs from "./configs";
import appleController from "./appleController";

const HOST = "0.0.0.0";

const app = express();

app.use(cors());

app.get("/", appleController);

app.get("/healthz", (req, res) => {
  res.sendStatus(200);
});

app
  .listen(Number(configs.port), HOST, () => {
    console.log(`Server is running in ${HOST}:${configs.port}`);
  })
  .on("error", (error) => {
    console.error(error);
  });
