import React from "react";
import {
  ContactBig,
  ContactInfo,
  ContactForm,
} from "@/components/ContactSection";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-8 lg:max-w-4xl md:max-w-2xl max-w-xs ">
        <ContactBig />
        <ContactInfo />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
