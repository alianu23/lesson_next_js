import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7w24tx9",
        "template_2c6fl4e",
        form.current,
        "X9V4twZZAeXHPOuSO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("sent");
        },
        (error) => {
          console.log(error.text);
          setSuccess("not sent");
        }
      );
  };

  return (
    <form id="userForm" ref={form} onSubmit={sendEmail}>
      <div className="mt-8 w-auto p-7 mx-3 bg-neutral-100 rounded-xl ">
        <div>
          <h1 className="lg:text-2xl md:text-xl text-lg font-sans mb-6">
            Leave a Message
          </h1>
          <div className="flex lg:flex-row md:flex-row flex-col">
            <input
              type="text"
              name="from_name"
              autoComplete="given-name"
              placeholder="Your Name"
              required
              className="border flex-1 py-[14px] pr-[14px] pl-5 border-zinc-200 rounded mr-5"
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your Email"
              required
              className="border flex-1 py-[14px] pr-[14px] pl-5 border-zinc-200 lg:mr-0 mr-5 rounded"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-7 ">
            <input
              type="text"
              placeholder="Subject"
              name="heading"
              required
              className="border lg:mr-0 mr-5 py-[14px] pr-[14px] pl-5 border-zinc-200 rounded mb-7"
            />
            <textarea
              placeholder="Write a Message"
              cols="30"
              rows="10"
              name="message"
              className="border lg:mr-0 mr-5 py-[14px] pr-[14px] pl-5 border-zinc-200 rounded"
            ></textarea>
          </div>
          <div className="flex lg:items-center md:items-center items-start lg:flex-row md:flex-row flex-col">
            <button
              type="submit"
              form="userForm"
              className="bg-[#4B6BFB] lg:text-base md:text-base text-sm hover:bg-[#313f7c]  py-2 px-4 text-white rounded-md mt-8 "
            >
              Send Message
            </button>
            <div className="ml-2 lg:mt-8 md:mt-8 mt-2">
              {success == "sent"
                ? "- Email is sent successfully. We will contact you soon"
                : success == "not sent"
                ? "- email did not send "
                : ""}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
