import mongoose, { Document, Schema } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  description: string;
  price: number;
}

export interface IBookModel extends IBook, Document {}

const BookSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IBookModel>("Book", BookSchema);
