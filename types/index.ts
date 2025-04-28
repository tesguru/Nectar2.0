import * as z from "zod";
import { LoginFormSchema, SignUpFormSchema } from "@/components/validation/loginvalidation";

export type LoginFormData = z.infer<typeof LoginFormSchema>;
export type SignUpFormData = z.infer<typeof SignUpFormSchema>;