import { Branch, branches } from '../../../data/branches';

// Get all branches
export function listBranches(): Branch[] {
  return branches;
}

// Find branch by ID
export function findBranchById(id: number): Branch | undefined {
  return branches.find((b: Branch) => b.id === id);
}

// Create a new branch
export function createBranch(payload: Omit<Branch, 'id'>): Branch {
  const nextId = branches.length ? Math.max(...branches.map((b: Branch) => b.id)) + 1 : 1;
  const newBranch: Branch = { id: nextId, ...payload };
  branches.push(newBranch);
  return newBranch;
}

// Update an existing branch
export function updateBranch(id: number, changes: Partial<Omit<Branch, 'id'>>): Branch | null {
  const idx = branches.findIndex((b: Branch) => b.id === id);
  if (idx === -1) return null;
  branches[idx] = { ...branches[idx], ...changes };
  return branches[idx];
}

// Delete a branch
export function deleteBranch(id: number): boolean {
  const idx = branches.findIndex((b: Branch) => b.id === id);
  if (idx === -1) return false;
  branches.splice(idx, 1);
  return true;
}