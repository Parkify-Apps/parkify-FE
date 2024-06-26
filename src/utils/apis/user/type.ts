import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  fullname: z.string().min(5, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().min(8, { message: "Password is required" }),
  role: z.enum(["user", "operator"], {
    required_error: "You need to select a role",
  }),
});

export const profileUpdateSchema = z.object({
  fullname: z.string().min(5, { message: "Name is required" }),
  password: z.string().optional(),
});

export type RoleType = "user" | "operator";

export interface User {
  fullname: string;
  email: string;
  role: RoleType;
  password: string;
  token: string;
  user_id: string;
}

export type ProfileUpdateType = z.infer<typeof profileUpdateSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
