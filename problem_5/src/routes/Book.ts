import express from "express";
import controller from "../controllers/Book";
import { Schemas, ValidateJoi } from "../middleware/Joi";

const bookRouter = express.Router();

bookRouter.post(
  "/books",
  ValidateJoi(Schemas.book.create),
  controller.createBook
);
bookRouter.get("/books/:bookId", controller.readBook);
bookRouter.get("/books/", controller.readAll);
bookRouter.patch(
  "/books/:bookId",
  ValidateJoi(Schemas.book.update),
  controller.updateBook
);
bookRouter.delete("/books/:bookId", controller.deleteBook);

export = bookRouter;
