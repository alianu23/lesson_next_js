import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="flex-1">MetaBlog</h1>
      <div className="flex flex-1">
        <h4>Home</h4>
        <h4>Blog</h4>
        <h4>Contact</h4>
        <input type="text" />
      </div>
    </div>
  );
};

export default Header;
