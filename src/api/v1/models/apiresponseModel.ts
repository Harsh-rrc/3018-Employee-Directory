// src/api/v1/models/api``````````````````````````````````````````````````````````````````````````````````````````````````````````responseModel.ts
export interface ApiResponse<T> {
success: boolean;
data: T;
errors?: any;
message?: string;
}