"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Container({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 1000,
      offset: 120,
    });
  }, []);
  return <div className=" h-full mx-64 ">{children}</div>;
}

export default Container;
