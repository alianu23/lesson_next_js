import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex mt-11">
      <div className="border mr-9 flex-wrap w-64 p-4 rounded-xl">
        <h1 className="lg:text-2xl text-lg font-sans">Address</h1>
        <p className="text-[#696A75] mt-3">
          1328 Oak Ridge Drive, Saint Louis, Missouri
        </p>
      </div>
      <div className="border mr-9 flex-wrap w-64 p-4 rounded-xl">
        <h1 className="lg:text-2xl text-lg font-sans">Contact</h1>
        <p className="text-[#696A75] mt-3">313-332-8662 info@email.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
