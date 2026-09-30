"use server";



import { getMailer } from "@/mailer/nodemailer";
import { rateLimit } from "@/rateLimiter/rateLimiter";
import { headers } from "next/headers";
import { userMail, adminMail } from "@/mailer/mailformat";
import type { FormState } from "@/types/form";
import { userSchema } from "@/validation/zod";


export  async function ContactAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const rawData = Object.fromEntries(data.entries());

  const ip = (await headers()).get("x-forwarded-for") ?? "unknown";

  const key = `${ip}:${rawData.email.toString().toLowerCase()}`;
  if (!rateLimit(key, 3, 10 * 60 * 1000)) {
    return {
      success: false,
      formError: "Too many request, Try again later",
    };
  }

  if (rawData.phone === "") delete rawData.phone;
  const parsedData = userSchema.safeParse(rawData);

  if (!parsedData.success) {
    const fieldError = parsedData.error.flatten().fieldErrors;
    return { success: false, errors: fieldError };
  }

  const { transporter, isVerified } = await getMailer();

  if (!isVerified) {
    console.log("server not ready");
    return { success: false };
  }

  await transporter.sendMail(userMail(parsedData));
  await transporter.sendMail(adminMail(parsedData));

  return { success: true };
}
