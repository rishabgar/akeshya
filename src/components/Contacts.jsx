import React from "react";
import Input from "./Input";
import { RiMapPinLine } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { HiOutlinePhone } from "react-icons/hi2";

function Contacts() {
  return (
    <div className="flex flex-col items-center">
      {/* <div className="flex flex-col items-center"> */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex items-center flex-col"
      >
        <div className="line-text text-3xl font-bold mb-10 ">CONTACT US</div>
      </div>
      <div className="grid grid-rows-1 grid-cols-3 gap-x-7">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 className="text-custom-blue text-3xl font-bold">Akeshya</h1>
          <p className="text-[#888]">
            Designers, developers & marketeers capable of delivering solutions
            according to your needs,
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="flex mb-6">
            <RiMapPinLine className="text-3xl text-custom-blue mr-4" />
            <p>
              26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
            </p>
          </div>
          <div className="flex mb-6">
            <RiMailSendLine className="text-3xl text-custom-blue mr-4" />
            <p>info@akeshya.com</p>
          </div>
          <div className="flex mb-6">
            <HiOutlinePhone className="text-3xl text-custom-blue mr-4" />
            <p>+91 94942 40922</p>
          </div>
        </div>
        <form
          className="flex flex-col gap-y-5"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
          <div className="border-2 border-solid border-black h-11">
            <Input type="text" placeholder="Your Name" />
          </div>
          <div className="border-2 border-solid border-black h-11">
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="border-2 border-solid border-black h-11">
            <Input type="text" placeholder="Subject" />
          </div>
          <div className="border-2 border-solid border-black h-auto">
            <Input type="textarea" placeholder="Message" />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded-full p-2 bg-[#14279B] text-white w-[150px] h-11 text-center hover:bg-[#0dcaf0]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
