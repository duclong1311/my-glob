// src/utils/schema.ts
import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),  // Dữ liệu tên phải là chuỗi và không trống
  age: z.number().min(18, 'Age must be at least 18'),  // Tuổi phải là số và >= 18
});

export type User = z.infer<typeof userSchema>;
