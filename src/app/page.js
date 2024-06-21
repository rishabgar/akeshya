"use client";
import {
  NavBar,
  Header,
  Container,
  MainSection,
  About,
  Services,
  OurProcess,
  CoreFeatures,
  Contacts,
  Footer,
} from "@/components/index";
import "remixicon/fonts/remixicon.css";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        if (homeRef.current)
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        if (aboutRef.current)
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "services":
        if (servicesRef.current)
          servicesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavBar />
      <div className="mt-36">
        <Container>
          <div ref={homeRef}>
            <Header scrollToSection={scrollToSection} />
          </div>
        </Container>
        <MainSection />
        <Container>
          <div ref={aboutRef}>
            <About scrollToSection={scrollToSection} />
          </div>
          <div
            ref={servicesRef}
            // className="border-2 border-solid border-black py-64"
          >
            <Services />
          </div>
          <OurProcess />
          <CoreFeatures />
          <Contacts />
        </Container>
        <Footer />
      </div>
    </>
  );
}
