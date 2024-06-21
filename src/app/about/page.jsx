import React from "react";
import { About, NavBar, Footer, Container } from "@/components";

function page() {
  return (
    <>
      <NavBar />
      <div className="pt-24">
        <Container>
          <About />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default page;
