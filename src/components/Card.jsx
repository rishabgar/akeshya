import React from "react";
import { FaDribbble } from "react-icons/fa6";

function Card({ para, title, imageName }) {
  return (
    <>
      <div className="box flex flex-col h-[400px] w-[300px] gap-y-3 bg-slate-200 px-7 py-4 ">
        <div className="w-fit rounded-full p-2 bg-custom-blue z-10">
          {imageName}
        </div>
        <h1 className="z-10 textWhite">{title}</h1>
        <p className="z-10 textWhite">{para}</p>
      </div>
    </>
  );
}

export default Card;
