// "use server";
// import React from "react";

async function Container({ children }) {
  return (
    <div className=" h-full w-full pr-24 pl-24 mt-20 border-2 border-solid border-black">
      {children}
    </div>
  );
}

export default Container;
