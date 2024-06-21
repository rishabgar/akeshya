import React from "react";
import ProcessCard from "./ProcessCard";

function OurProcess() {
  const cardData = [
    {
      count: 1,
      title: "Planning",
      para: "We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.",
    },
    {
      count: 2,
      title: "Design",
      para: "We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.",
    },
    {
      count: 3,
      title: "Development",
      para: "We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.",
    },
    {
      count: 4,
      title: "Marketing",
      para: "We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-40">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex items-center flex-col mt-2"
      >
        <div className="line-text text-3xl font-bold mb-3 ">Our Process</div>
        <p>
          Over the years we’ve evolved a tested method for attaining achievement
          for each one of our clients.
        </p>
      </div>
      <div className=" grid grid-rows-2 grid-cols-2 gap-y-32 gap-x-16">
        {cardData.map((card, index) => {
          return (
            <div
              key={index}
              className="shadow-custom-light"
              data-aos="fade-up"
              data-aos-duration="3000"
              //   data-aos-delay="400"
            >
              <ProcessCard
                count={card.count}
                title={card.title}
                para={card.para}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurProcess;
