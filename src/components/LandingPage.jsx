import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className="text-8xl leading-[6.5vw] tracking-tighter uppercase font-medium title2">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
