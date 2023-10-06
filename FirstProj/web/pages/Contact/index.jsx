import React from "react";
import ContactBig from "@/component/ContactSection/ContactBig";
import ContactInfo from "@/component/ContactSection/ContactInfo";
import ContactMessage from "@/component/ContactSection/ContactMessage";

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
