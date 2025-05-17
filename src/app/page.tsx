import { Container } from "@components/common/Container";
import { Video } from "@components/landing/Video";
import { Header } from "@components/landing/Header";
import { Navbar } from "@components/landing/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <section className="mt-60">
        <Container>
          <div className="bg-thin p-5 rounded-4xl">
            <Video />
          </div>
        </Container>
      </section>
    </>
  );
}
