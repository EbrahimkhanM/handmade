import React from "react";

const Card = ({ name }) => {
  return (
    <>
      <div className="border rounded-full lg:w-40 lg:h-40 w-36 h-36  flex justify-center items-center text-basefont-normal transition ease-in-out delay-150 bg-[#a95414] hover:-translate-y-1 hover:scale-110  hover:bg-[#a95414] duration-300">
        {name}
      </div>
    </>
  );
};

export default Card;
