import { NavBar, Header, Container, MainSection } from "@/components/index";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className=" mt-36">
        <Container>
          <Header />
        </Container>
        <MainSection />
      </div>
    </>
  );
}
