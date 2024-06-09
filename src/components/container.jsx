// "use server";
import React from "react";

async function Container({ children }) {
  return <div className=" h-full w-full pr-24 pl-24">{children}</div>;
}

export default Container;
