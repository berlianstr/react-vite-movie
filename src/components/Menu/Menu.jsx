import React from "react";
import Card from "../Card/Card";

export default function Menu({ title }) {
  return (
    <div className="menu px-[60px] min-h-screen bg-black">
      <p className="text-[32px] font-bold">{title}</p>
      <div className=" grid grid-cols-4">
        <Card img={poster1} />
      </div>
    </div>
  );
}
