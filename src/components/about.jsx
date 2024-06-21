"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CiFaceSmile } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { BsJournalRichtext } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

function About({ scrollToSection }) {
  const [count, setCount] = useState(3834000);
  const limit = 3835039; // Set your limit here
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < limit) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      });

      // Cleanup the interval on component unmount or when inView is false
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div className="flex items-center flex-col py-16">
      <div
        className="line-text text-3xl font-bold mb-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        ABOUT US
      </div>
      <div
        className="grid grid-cols-2 gap-x-4"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="2000"
      >
        <div className=" text-[#444444]">
          We are Akeshya, a firm that specializes in web design and marketing.
          We help transform ideas into reality with a team of passionate graphic
          designers, web developers, and seasoned marketing advisors.
          <ul>
            <li className="flex mt-3">
              <i className="ri-check-double-fill pr-2"></i>
              <div>
                We started with a simple idea: do what is best for the client.
              </div>
            </li>
            <li className="flex mt-3">
              <i className="ri-check-double-fill pr-2"></i>
              <div>
                Our methodical and individual approach to each project delivers
                the finest possible results for your media.
              </div>
            </li>
            <li className="flex mt-3">
              <i className="ri-check-double-fill pr-2"></i>
              <div>
                Our day-to-day work is to solve your problems utilising the most
                up-to-date, practical adaptive technology, and we have a lot of
                fun doing it.
              </div>
            </li>
          </ul>
        </div>
        <div className=" text-[#444444] flex flex-col gap-y-7">
          We're professional, but we're also friendly, and we'll always pay
          attention to your concerns. We expect to work with innovative people
          that have an open mind and are dedicated to making every idea a
          reality. We want to hear from you if you're interested in SEO, have
          Web Development ideas, or require a graphic designer who can match
          your goals.
          <button
            className="border-2 w-56 border-solid text-[#14279B] border-[#14279B] px-7 py-2 rounded-full hover:bg-[#14279B] hover:text-white"
            onClick={() => scrollToSection("services")}
          >
            Learn More
          </button>
        </div>
      </div>
      <div ref={ref} data-aos="fade-up" className=" w-full mt-12 flex">
        <img
          src="/images/svg/counts-img.svg"
          alt=""
          className="w-[500px] h-80 mr-7 "
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="800"
        />
        <ul
          className="mt-20 grid grid-rows-2 grid-cols-2 gap-x-48"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="800"
        >
          <li className="flex gap-x-3 h-24">
            <CiFaceSmile className="text-4xl text-blue-800" />
            <div className=" flex flex-col ">
              <div className="font-bold text-4xl ">{count}</div>

              <span className="mt-3 text-sm">
                <strong className="text-[#484848] ">Oraganic Reach</strong>{" "}
                (Global)
              </span>
            </div>
          </li>
          <li className="flex gap-x-3 h-24">
            <BsJournalRichtext className="text-4xl text-blue-800" />
            <div className=" flex flex-col ">
              <div className="font-bold text-4xl ">85</div>

              <span className="mt-3 text-sm">
                <strong className="text-[#484848]">Campaigns</strong>
              </span>
            </div>
          </li>
          <li className="flex gap-x-3 h-24">
            <CiClock2 className="text-4xl text-blue-800" />
            <div className=" flex flex-col ">
              <div className="font-bold text-4xl ">{count}</div>

              <span className="mt-3 text-sm">
                <strong className="text-[#484848]">Watch Hours</strong> (Asia)
              </span>
            </div>
          </li>
          <li className="flex gap-x-3 h-24">
            <AiOutlineGlobal className="text-4xl text-blue-800" />
            <div className=" flex flex-col ">
              <div className="font-bold text-4xl ">17</div>

              <span className="mt-3 text-sm">
                <strong className="text-[#484848]">Excellent CTR</strong> %
                (Asia)
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
