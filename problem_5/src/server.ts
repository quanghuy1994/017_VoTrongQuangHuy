import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import bookRouter from "./routes/Book";
import { config } from "./config/config";
import cors from "cors"
const app = express();

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.info("Mongo connected successfully.");
    app.use(json());
    app.use(cors());
    app.listen(config.server.port, () => {
      console.log(`server is listening on port ${config.server.port}`);
    });
    app.use(bookRouter);
  })
  .catch((error) => console.error(error));

export default app