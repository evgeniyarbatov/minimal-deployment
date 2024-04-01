import express from "express";
import logger from './logger';

const app = express();
const PORT = 8000;

app.get("/", async function (req, res) {
  logger.info("GET request")
  res.send("Hello world");
});

app.listen(PORT, async function () {
  logger.info(`App running on ${PORT}`);
});