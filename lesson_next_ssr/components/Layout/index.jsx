import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children, setSearchTitle }) => {
  return (
    <div>
      <Header setSearchTitle={setSearchTitle} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
