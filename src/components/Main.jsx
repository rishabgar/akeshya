import React from "react";

function Main() {
  return (
    <main className="w-full h-28 bg-[#f3f9fd]">
      <div className="flex justify-between items-center h-full mr-64 ml-64 px-6">
        <div className="h-24 w-24">
          <img
            className="grayscale hover:grayscale-0 w-full"
            src="/images/png/client-1.png"
            alt=""
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
          />
        </div>
        <div className="h-24 w-24 py-3 ">
          <img
            className="grayscale hover:grayscale-0 h-full w-full"
            src="/images/png/client-2.png"
            alt=""
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="1000"
          />
        </div>
        <div className="h-24 w-24 py-3">
          <img
            className="h-full w-full"
            src="/images/png/client-3.png"
            alt=""
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          />
        </div>
        <div className="h-24 w-24 py-3">
          <img
            className="grayscale hover:grayscale-0 h-full w-full"
            src="/images/png/client-4.png"
            alt=""
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-duration="1000"
          />
        </div>
        <div className="h-24 w-24 py-3">
          <img
            className="grayscale hover:grayscale-0 h-full w-full"
            src="/images/png/client-5.png"
            alt=""
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1000"
          />
        </div>
        <div className="h-24 w-24 py-3">
          <img
            className="h-full w-full"
            src="/images/png/client-6.png"
            alt=""
            data-aos="zoom-in"
            data-aos-delay="350"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
