import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(1, "Password is required."),
});
export const SignUpFormSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(1, "Password is required."),
  username: z.string().min(1, "Username is required."),
});

