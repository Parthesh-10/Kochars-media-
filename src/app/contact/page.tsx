"use client";

import Image from "next/image";

import { useFormStatus } from "react-dom";
import { ContactAction } from "@/action/send-mail/sendMail";
import { useActionState } from "react";

const initialState = {
  success: false,
  errors: {},
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="w-full my-5 py-2 text-white font-bold bg-red-900 rounded-lg"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default function Contact() {
  const [state, formAction] = useActionState(ContactAction, initialState);

  return (
    <div className="h-fit  md:h-250 pb-10 md:pb-0 flex justify-between flex-wrap md:flex-nowrap">
      <div className="w-full md:w-200 h-80 md:h-full  relative shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] rounded-2xl sm:rounded-none overflow-hidden">
        <Image src={`/imgs/contactimg.jpeg`} alt="contactpageImg" fill sizes="90vw" loading="eager"/>
      </div>
      <div className=" pt-10 sm:pt-25 px-10 sm:px-30 w-full ">
        <div className="py-2 mb-5">
        <div className="mb-5">  <img src="/imgs/companylogoblack.png" alt="companylogo" className="w-30 " /></div>
          <h1 className="text-6xl font-bold mb-5">Let's Get in Touch</h1>
          <p>
            Or just reach out manually to{" "}
            <span className="font-bold text-red-700">
              info@kochharmediaplanner.com
            </span>{" "}
          </p>
        </div>
        <form action={formAction}>
          <div className="mb-2">
            <p className="text-gray-600 font-bold -mb-1">Name</p>
            <input
              className="formField  "
              type="text"
              name="name"
              placeholder="Enter your name .."
              required
            />
          </div>
          <div className="mb-2">
            <p className="text-gray-600 font-bold -mb-1"> Email Address</p>
            <input
              className="formField  "
              type="email"
              name="email"
              placeholder="Enter your email address .."
              required
            />
          </div>
          <div className="mb-2">
            <p className="text-gray-700 font-bold -mb-1">Phone Number</p>
            <input
              className="formField apperance-none"
              type="text"
              inputMode="numeric"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\D/g,
                  "",
                );
              }}
              name="phone"
              placeholder=" +91-1234567890 "
            />
          </div>
          <div className="mb-2">
            <p className="text-gray-700 font-bold -mb-1">Message</p>
            <textarea
              className=" formField h-50 resize-none"
              name="message"
              placeholder="Enter your message"
              id=""
              required
            />{" "}
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

