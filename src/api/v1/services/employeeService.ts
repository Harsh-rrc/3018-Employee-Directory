import { branches, Branch } from '../../../data/branches';
 
/**
 * Retrieves all branches
 * @returns Array of all branches
 */
export const getAllBranches = (): Branch[] => {
    return [...branches];
};
 
/**
 * Retrieves a branch by ID
 * @param id - The ID of the branch
 * @returns The branch or undefined if not found
 */
export const getBranchById = (id: number): Branch | undefined => {
    return branches.find(branch => branch.id === id);
};
 
/**
 * Creates a new branch
 * @param data - The branch data without ID
 * @returns The created branch
 */
export const createBranch = (data: Omit<Branch, 'id'>): Branch => {
    const newBranch: Branch = {
        id: Date.now(),
        ...data,
    };
    branches.push(newBranch);
    return newBranch;
};
 
/**
 * Updates an existing branch
 * @param id - The ID of the branch to update
 * @param data - The fields to update
 * @returns The updated branch or undefined if not found
 */
export const updateBranch = (id: number, data: Partial<Pick<Branch, 'name' | 'address' | 'phone'>>): Branch | undefined => {
    const index = branches.findIndex(branch => branch.id === id);
    if (index === -1) return undefined;
    branches[index] = { ...branches[index], ...data };
    return branches[index];
};
 
/**
 * Deletes a branch by ID
 * @param id - The ID of the branch to delete
 * @returns True if deleted, false if not found
 */
export const deleteBranch = (id: number): boolean => {
    const index = branches.findIndex(branch => branch.id === id);
    if (index === -1) return false;
    branches.splice(index, 1);
    return true;
};