import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-15">
        <h1 className="text-8xl">Featured projects</h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none text-8xl">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full rounded-xl h-full overflow-hidden">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                alt=""
              />
            </div>
          </div>

          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none text-8xl">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full rounded-xl h-full overflow-hidden">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
