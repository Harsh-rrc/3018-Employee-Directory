import { Request, Response } from "express";

// Placeholder controller for items
export const getItems = (req: Request, res: Response) => {
  res.json({ message: "Get all items" });
};

// Placeholder controller for creating an item
export const createItem = (req: Request, res: Response) => {
  res.status(201).json({ message: "Item created" });
};