import React from "react";
import ContactBig from "@/component/ContactBig";
import ContactInfo from "@/component/ContactInfo";
import ContactMessage from "@/component/ContactMessage";

const Contact = () => {
  return (
    <div className="container mx-auto mt-24 max-w-4xl">
      <ContactBig />
      <ContactInfo />
      <ContactMessage />
    </div>
  );
};

export default Contact;
