import React from "react";
import { Card } from ".";
import { FaDribbble } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BiTachometer } from "react-icons/bi";

function Services() {
  return (
    <div className="flex flex-col items-center h-[510px] my-16">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex items-center flex-col mb-9"
      >
        <div className="line-text text-3xl font-bold mb-3">SERVICES</div>
        <p>
          Akeshya will serve as your consultant and development partner to help
          you turn your idea into a reality.
        </p>
      </div>

      <div className="flex gap-x-7">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="shadow-custom-light"
        >
          <Card
            title="Design"
            para="Our web design services can assist you in reclaiming your company's
          online image. Your business will flourish on the Internet thanks to
          the combination of style and technology we provide, as well as our
          experience"
            imageName={<FaDribbble className="text-3xl text-white textBlue" />}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="200"
          className="shadow-custom-light"
        >
          <Card
            title="Development"
            para="Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools."
            imageName={
              <FaRegFileAlt className="text-3xl text-white textBlue" />
            }
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="400"
          className="shadow-custom-light"
        >
          <Card
            title="Development"
            para="Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools."
            imageName={<BiWorld className="text-3xl text-white textBlue" />}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="600"
          className="shadow-custom-light"
        >
          <Card
            title="Development"
            para="Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools."
            imageName={
              <BiTachometer className="text-3xl text-white textBlue" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
