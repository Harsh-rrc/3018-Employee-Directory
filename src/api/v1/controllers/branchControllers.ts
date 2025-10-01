import { Request, Response } from 'express';
import * as branchService from '../services/branchService';
 
export const createBranch = (req: Request, res: Response) => {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone) {
    return res.status(400).json({ message: 'Missing required fields: name, address, phone' });
  }
  const newBranch = branchService.createBranch({ name, address, phone });
  return res.status(201).json(newBranch);
};
 
export const getAllBranches = (_req: Request, res: Response) => {
  return res.status(200).json(branchService.listBranches());
};
 
export const getBranchById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid id' });
  const branch = branchService.findBranchById(id);
  if (!branch) return res.status(404).json({ message: 'Branch not found' });
  return res.status(200).json(branch);
};
 
export const updateBranch = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const changes = req.body;
  if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid id' });
  const updated = branchService.updateBranch(id, changes);
  if (!updated) return res.status(404).json({ message: 'Branch not found' });
  return res.status(200).json(updated);
};
 
export const deleteBranch = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid id' });
  const success = branchService.deleteBranch(id);
  if (!success) return res.status(404).json({ message: 'Branch not found' });
  return res.status(200).json({ message: 'Deleted' });
};