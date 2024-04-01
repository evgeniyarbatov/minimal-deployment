import express, { Request, Response } from "express";
import logger from './logger';

const app = express();
const PORT = 8080;

app.get("/", async function (req, res) {
  logger.info("GET request")
  res.send("Hello world");
});

app.get('/healthz', (req: Request, res: Response): void => {
  logger.info("Health probe")
  res.send('OK');
});

app.get('/ready', (req: Request, res: Response): void => {
  logger.info("Readiness probe")
  res.send('OK');
});

app.listen(PORT, async function () {
  logger.info(`App running on ${PORT}`);
});