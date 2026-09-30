
import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().trim().email("Invalid email"),
  phone: z
    .string()
    .min(10)
    .max(14)
    .regex(/^\d+$/, "Only number allowed")
    .optional(),
  message: z.string().min(10, "Message to short"),
});


