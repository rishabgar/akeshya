import React from "react";
import { Card } from ".";
import { FaDribbble } from "react-icons/fa6";

function Services() {
  return (
    <div className="flex flex-col items-center border-2 border-solid border-black">
      <div
        className="line-text text-3xl font-bold mb-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        SERVICES
      </div>
      <div className="flex border-2 border-solid border-black">
        <Card
          title="Design"
          para="Our web design services can assist you in reclaiming your company's
          online image. Your business will flourish on the Internet thanks to
          the combination of style and technology we provide, as well as our
          experience"
          imageName={<FaDribbble className="text-3xl text-white" />}
        />
        <Card
          title="Development"
          para="Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools."
          imageName={<FaDribbble className="text-3xl text-white" />}
        />
        <Card
          title="Development"
          para="Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools."
          imageName={<FaDribbble className="text-3xl text-white" />}
        />
        <Card
          title="Development"
          para="Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools."
          imageName={<FaDribbble className="text-3xl text-white" />}
        />
      </div>
    </div>
  );
}

export default Services;
