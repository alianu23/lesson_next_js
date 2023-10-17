import React from "react";
import {
  ContactBig,
  ContactInfo,
  ContactForm,
} from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 lg:max-w-4xl md:max-w-2xl max-w-xs ">
      <ContactBig />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
