import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const ContactMessage = () => {
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
    <form className="p-6 mt-11" id="userForm" ref={form} onSubmit={sendEmail}>
      <div className="mt-11 w-auto pl-[35px] pr-[200px] pt-[29px] pb-[26px] bg-neutral-100 rounded-xl ">
        <div>
          <h1 className="text-lg font-semibold mb-6">Leave a Message</h1>
          <div className="md:flex sm:w-20">
            <input
              type="text"
              name="from_name"
              autoComplete="given-name"
              placeholder="Your Name"
              required
              className="border shrink flex-1 py-[14px] pr-[14px] pl-5 border-zinc-200 rounded mr-7"
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your Email"
              required
              className="border shrink flex-1 py-[14px] pr-[14px] pl-5 border-zinc-200 rounded"
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
              className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded mb-7"
            />
            <textarea
              placeholder="Write a Message"
              cols="30"
              rows="10"
              name="message"
              className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              form="userForm"
              className="bg-[#4B6BFB] hover:bg-[#313f7c] py-2 px-4 text-white rounded-md mt-8 "
            >
              Send Message
            </button>
            <div>
              {success == "sent"
                ? "Email is sent successfully. We will contact you soon"
                : success == "not sent"
                ? "email did not send "
                : ""}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactMessage;
