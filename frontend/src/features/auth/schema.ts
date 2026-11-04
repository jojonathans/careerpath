import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().min(1, "Email wajib diisi").email("Format email tidak valid"),
  password: z.string().min(1, "Password wajib diisi"),
  keepLoggedIn: z.boolean(),
});

export type LoginFormData = z.infer<typeof loginSchema>;