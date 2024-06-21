import React from "react";
import CoreFeaturesCard from "@/components/CoreFeaturesCard";
import { RiWindowLine } from "react-icons/ri";
import { RiCodeBoxLine } from "react-icons/ri";
import { RiCreativeCommonsByLine } from "react-icons/ri";
import { MdPlayCircleOutline } from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";
import { RiTodoLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";
import { RiDiscLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { RiAdvertisementFill } from "react-icons/ri";

function CoreFeatures() {
  const cardData = [
    {
      title: "Web Design",
      imageName: <RiWindowLine className="text-3xl text-[#ffbb2c]" />,
    },
    {
      title: "Development",
      imageName: <RiCodeBoxLine className="text-3xl text-[#5578ff]" />,
    },
    {
      title: "Branding",
      imageName: (
        <RiCreativeCommonsByLine className="text-3xl text-[#e80368]" />
      ),
    },
    {
      title: "Media Buying",
      imageName: <MdPlayCircleOutline className="text-3xl text-[#e361ff]" />,
    },
    {
      title: "Search Engine",
      imageName: <RiSearchEyeLine className="text-3xl text-[#47aeff]" />,
    },
    {
      title: "Brand Strategy",
      imageName: <RiTodoLine className="text-3xl text-[#ffbb2c]" />,
    },
    {
      title: "Local Search Marketing",
      imageName: <RiMapPinLine className="text-3xl text-[#dbce11]" />,
    },
    {
      title: "Lead Tracking & Management ",
      imageName: <RiBarChartGroupedLine className="text-3xl text-[#4233ff]" />,
    },
    {
      title: "Contact management",
      imageName: <RiContactsBookLine className="text-3xl text-[#b2904f]" />,
    },
    {
      title: "Media management",
      imageName: <RiDiscLine className="text-3xl text-[#b20969]" />,
    },
    {
      title: "Social scheduling",
      imageName: <SlCalender className="text-3xl text-[#ff5828]" />,
    },
    {
      title: "Ad retargeting",
      imageName: <RiAdvertisementFill className="text-3xl text-[#29cc61]" />,
    },
  ];
  return (
    <div className="flex flex-col items-center my-32">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex items-center flex-col mb-3"
      >
        <div className="line-text text-3xl font-bold mb-3">
          OUR CORE FEATURES
        </div>
        <p className="text-center">
          Akeshya is a forward-thinking and intelligent design firm that is
          technically and creatively capable of transforming your brand into its
          best digital self. Our approach to design and development results in
          compelling, engaging branding and immersive digital experiences that
          provide a value for money.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-cols-4 gap-6">
        {cardData.map((card, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="3000"
              //   data-aos-delay="400"
            >
              <CoreFeaturesCard title={card.title} imgaeName={card.imageName} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoreFeatures;
