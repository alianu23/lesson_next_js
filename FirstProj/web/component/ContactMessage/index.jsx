import React from "react";

const ContactMessage = () => {
  return (
    <div className="mt-11 w-auto pl-[35px] pr-[130px] pt-[29px] pb-[26px] bg-neutral-100 rounded-xl ">
      <div>
        <h1 className="text-lg font-semibold mb-6">Leave a Message</h1>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded mr-7"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-7 w-[455px]">
          <input
            type="text"
            placeholder="Subject"
            className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded mb-7"
          />
          <input
            type="text"
            placeholder="Write a message"
            className="border items-start justify-start h-80 py-[14px] pr-[14px] pl-5 border-zinc-200 rounded "
          />
        </div>

        <button className="bg-[#4B6BFB] py-2 px-4 text-white rounded-md mt-8">
          {" "}
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactMessage;
