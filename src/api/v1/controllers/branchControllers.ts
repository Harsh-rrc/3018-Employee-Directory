import { Request, Response } from 'express';
import * as branchService from '../services/branchService';

export const createBranch = async (req: Request, res: Response) => {
  try {
    const data = await branchService.createBranch(req.body);
    res.status(201).json({ data });
  } catch (e) {
    res.status(400).json({ error: "Error creating branch" });
  }
};

export const getAllBranches = async (_req: Request, res: Response) => {
  try {
    const data = await branchService.listBranches();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ error: "Failed to get branches" });
  }
};

export const getBranchById = async (req: Request, res: Response) => {
  try {
    const data = await branchService.findBranchById(req.params.id);
    if (!data) return res.status(404).json({ error: "Branch not found" });
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ error: "Error fetching branch" });
  }
};

export const updateBranch = async (req: Request, res: Response) => {
  try {
    const data = await branchService.updateBranch(req.params.id, req.body);
    if (!data) return res.status(400).json({ error: "Branch not found" });
    res.status(200).json({ data });
  } catch (e) {
    res.status(400).json({ error: "Error updating branch" });
  }
};

export const deleteBranch = async (req: Request, res: Response) => {
  try {
    const emp = await branchService.findBranchById(req.params.id);
    if (!emp) return res.status(404).json({ error: "Branch not found" });

    await branchService.deleteBranchById(req.params.id);
    res.status(200).json({ message: "Branch deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: "Error deleting branch" });
  }
};
