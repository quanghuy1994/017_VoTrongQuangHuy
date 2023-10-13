import express from "express";
import controller from "../controllers/Book";
import { Schemas, ValidateJoi } from "../middleware/Joi";

const bookRouter = express.Router();

bookRouter.post(
  "/create",
  ValidateJoi(Schemas.book.create),
  controller.createBook
);
bookRouter.get("/get/:bookId", controller.readBook);
bookRouter.get("/get/", controller.readAll);
bookRouter.patch(
  "/update/:bookId",
  ValidateJoi(Schemas.book.update),
  controller.updateBook
);
bookRouter.delete("/delete/:bookId", controller.deleteBook);

export = bookRouter;
