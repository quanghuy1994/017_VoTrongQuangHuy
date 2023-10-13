import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Book from "../models/Book";

// Create book
const createBook = (req: Request, res: Response, next: NextFunction) => {
  const { title, author, description, price } = req.body;
  console.log("body:" + req.body);
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title,
    author,
    description,
    price,
  });

  return book
    .save()
    .then((book) => res.status(201).json({ book }))
    .catch((error) => res.status(500).json({ error }));
};

// Find book by using ID
const readBook = (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.bookId;

  return Book.findById(bookId)
    .then((book) =>
      book
        ? res.status(200).json({ book })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

// Find all book
const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Book.find()
    .then((books) => res.status(200).json({ books }))
    .catch((error) => res.status(500).json({ error }));
};
// Update Book by using Id
const updateBook = (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.bookId;

  return Book.findById(bookId)
    .then((book) => {
      if (book) {
        book.set(req.body);

        return book
          .save()
          .then((book) => res.status(201).json({ book }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
// Delete Book by using ID
const deleteBook = (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.bookId;

  return Book.findByIdAndDelete(bookId)
    .then((book) =>
      book
        ? res.status(201).json({ book, message: "Deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default { createBook, readBook, readAll, updateBook, deleteBook };
