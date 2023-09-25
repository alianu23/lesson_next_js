import React, { useState } from "react";

const AboutPage = () => {
  const [count, setCount] = useState(100);
  const add = () => {
    setCount(count + 10);
  };
  const minus = () => {
    setCount(count - 10);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">UseState</h1>
      <p className="text-xl mt-4">Counter = {count}</p>
      <div className="mt-5">
        <button
          className="mr-5 border px-3 rounded-lg bg-stone-200"
          onClick={add}
        >
          Add
        </button>
        <button
          className=" border px-3 rounded-lg bg-stone-300"
          onClick={minus}
        >
          Minus
        </button>
      </div>
    </div>
  );
};
export default AboutPage;
