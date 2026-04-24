import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-10 bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <h1 className="text-[15vw] leading-none title uppercase ">we are ochi</h1>
        <h1 className="text-[15vw] leading-none title uppercase ">we are ochi</h1>
      </div>
    </div>
  );
};

export default Marquee;
