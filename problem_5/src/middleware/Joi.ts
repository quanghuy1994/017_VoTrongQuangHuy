import Joi, { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import { IBook } from "../models/Book";

export const ValidateJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log("body:" + req.body.title);
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.error(error);
      console.log("body:" + req.body.title);
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  book: {
    create: Joi.object<IBook>({
      title: Joi.string().required(),
      author: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
    }),
    update: Joi.object<IBook>({
      title: Joi.string().required(),
      author: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
    }),
  },
};
