// "use server";

import { NavBar, MainSection, Container } from "@/components/index";
// import Container from "@/components/container";

export default function Home() {
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
