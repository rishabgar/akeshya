"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathName = usePathname();

  return (
    <>
      <div className="fixed top-0 h-36 w-full flex items-center z-50 bg-white">
        <div className="mr-64 ml-64 h-20 w-full flex items-center justify-between ">
          <Link
            className="text-3xl flex items-center  text-[#14279B] font-bold "
            href="/"
          >
            <Image
              src="/images/png/logo.png"
              alt="test"
              width={65}
              height={70}
            />
            <h1>AKESHYA</h1>
          </Link>
          <ul className="flex justify-center items-center h-full">
            <li className="mr-7">
              <Link
                className={`${
                  pathName === "/" ? "text-[#14279B]" : "text-[#555555]"
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mr-7">
              <Link
                className={`${
                  pathName === "/about" ? "text-[#14279B]" : "text-[#555555]"
                }`}
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="mr-7">
              <Link
                className={`${
                  pathName === "/services" ? "text-[#14279B]" : "text-[#555555]"
                }`}
                href="/services"
              >
                Services
              </Link>
            </li>
            <li className="rounded-full p-2 bg-[#14279B] text-white w-32 text-center hover:bg-[#0dcaf0]">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
