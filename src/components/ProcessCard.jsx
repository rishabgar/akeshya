import React from "react";

function ProcessCard({ count, title, para }) {
  return (
    <div className="h-44 w-[565px] px-7 py-4 flex flex-col items-center gap-y-3 bg-[#f6f6f6] hover:bg-custom-blue hover:text-white">
      <h1 className="font-bold text-xl">
        <span className="pr-2 ">{count}.</span>
        {title}
      </h1>
      <p>{para}</p>
    </div>
  );
}

export default ProcessCard;
