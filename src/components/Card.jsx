import React from "react";

function Card({ para, title, imageName }) {
  return (
    <>
      <div className="flex flex-col border-2 border-solid border-black h-[400px] w-[300px] gap-y-3 bg-slate-200 px-7 py-4">
        <div className="border-2 border-solid border-black w-fit rounded-full p-2 bg-custom-blue">
          {imageName}
        </div>
        <h1>{title}</h1>
        <p>{para}</p>
      </div>
    </>
  );
}

export default Card;
