import React from "react";
import ContactBig from "@/components/ContactSection/ContactBig";
import ContactInfo from "@/components/ContactSection/ContactInfo";
import ContactMessage from "@/components/ContactSection/ContactMessage";

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
