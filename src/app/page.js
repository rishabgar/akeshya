"use client";

import { NavBar, MainSection, Container } from "@/components/index";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
// import Container from "@/components/container";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true, // Whether the animation should happen only once
      delay: 50, // Delay in milliseconds
      duration: 1000, // Duration of the animation in milliseconds
      offset: 120, // Offset to trigger the animation (in pixels)
    });
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        <MainSection />
      </Container>
    </>
    // <div className="border-2 border-black border-solid relative h-28">
    //   <h1 className="animate-[anime_2s_ease-in-out_1]">
    //     Grow your business with akeshya
    //   </h1>
    //   <p className="animate-[anime_2s_ease-in-out_1]">
    //     We are team of talented web designer,developers and digital marketers
    //   </p>
    // </div>
  );
}
