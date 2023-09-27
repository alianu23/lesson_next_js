import React from "react";

const CardTop = () => {
  return (
    <div>
      Recent blog posts
      <div>
        <img src="/unsplash.avif" alt="" className="w-80 h-60" />
        <p>August 22, 2022</p>
        <h1>UX review presentations</h1>
        <a href="/">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default CardTop;
