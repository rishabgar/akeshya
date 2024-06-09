"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBar() {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <>
      <div className="fixed h-20 border-2 pr-24 pl-24 border-black border-solid w-full flex items-center justify-between">
        <div className="text-2xl w-2/5">
          <h1>AKESHYA</h1>
        </div>
        <ul className="border-blue-800 w-1/2 flex justify-center pr-4 pl-4 items-center">
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
    </>
  );
}

export default NavBar;
