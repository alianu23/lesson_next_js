import React from "react";

const ContactMessage = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <div className="mt-11 w-auto pl-[35px] pr-[200px] pt-[29px] pb-[26px] bg-neutral-100 rounded-xl ">
      <div>
        <h1 className="text-lg font-semibold mb-6">Leave a Message</h1>
        <div>
          <input
            type="text"
            id="frm-name"
            autoComplete="given-name"
            placeholder="Your Name"
            required
            className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded mr-7"
          />
          <input
            type="email"
            id="frm-email"
            name="email"
            autoComplete="email"
            placeholder="Your Email"
            required
            className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-7 ">
          <input
            type="text"
            placeholder="Subject"
            required
            className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded mb-7"
          />
          <textarea
            placeholder="Write a Message"
            cols="30"
            rows="10"
            id="frm-message"
            className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#4B6BFB] py-2 px-4 text-white rounded-md mt-8 "
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactMessage;
