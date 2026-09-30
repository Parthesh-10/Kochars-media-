"use server";

import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;
let isVerified = false;

export async function getMailer() {
  if (transporter && isVerified) {
    return { transporter, isVerified };
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: process.env.ADMIN_MAIL!,
      pass: process.env.ADMIN_PASSWORD!,
    },
     connectionTimeout: 10_000,
  });

  try {
    await transporter.verify();
    console.log("SMTP ready");
    isVerified = true;
  } catch (err) {
    console.error("SMTP Error:", err);
    isVerified = false;
  }

  return { transporter, isVerified };
}
