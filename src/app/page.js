import {
  NavBar,
  Header,
  Container,
  MainSection,
  About,
  Services,
} from "@/components/index";
import "remixicon/fonts/remixicon.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="mt-36">
        <Container>
          <Header />
        </Container>
        <MainSection />
        <Container>
          <About />
          <Services />
        </Container>
      </div>
    </>
  );
}
