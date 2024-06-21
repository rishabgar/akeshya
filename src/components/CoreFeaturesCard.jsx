import Link from "next/link";
import React from "react";
import { RiWindowLine } from "react-icons/ri";

function CoreFeaturesCard({ title, imgaeName }) {
  return (
    <div className="h-20 w-80 flex items-center bg-[#f6f6f6]">
      <div className="pl-6 pr-3">
        {/* <RiWindowLine className="text-3xl text-[#ffbb2c]" /> */}
        {imgaeName}
      </div>
      <Link href="/" className="font-bold">
        {/* Web Design */}
        {title}
      </Link>
    </div>
  );
}

export default CoreFeaturesCard;
