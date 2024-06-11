"use client";

import React from "react";
import Image from "next/image";

function mainSection() {
  return (
    <div className="h-[590px] py-14">
      <div className="grid grid-cols-2 h-[430px]" data-aos="fade-up">
        <div>
          <h1 className="text-5xl pb-3 font-bold text-[#14279B]">
            Grow your business with Akeshya
          </h1>
          <p className="text-2xl pb-12" data-aos="fade-up" data-aos-delay="800">
            We are team of talented website designers, developers & digital
            marketeers
          </p>
          <button className="border-2 border-solid text-[#14279B] border-[#14279B] px-7 py-2 rounded-full hover:bg-[#14279B] hover:text-white">
            Get Started
          </button>
        </div>
        <div>
          <Image
            src={"/images/png/hero-img.png"}
            alt=""
            width={600}
            height={500}
            className="animate-[upDown_2s_ease-in-out_infinite_alternate]"
          />
        </div>
      </div>
    </div>
  );
}

export default mainSection;
