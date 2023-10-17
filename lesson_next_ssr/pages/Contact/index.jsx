import React from "react";
import ContactBig from "@/components/ContactSection/ContactBig";
import ContactInfo from "@/components/ContactSection/ContactInfo";
import ContactMessage from "@/components/ContactSection/ContactMessage";

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 lg:max-w-4xl md:max-w-3xl max-w-xs ">
      <ContactBig />
      <ContactInfo />
      <ContactMessage />
    </div>
  );
};

export default Contact;
