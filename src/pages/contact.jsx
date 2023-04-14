import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderTag } from "@/components/HeadTag";
import { Main } from "@/components/Main";

export default function Contact() {
  return (
    <>
      <HeaderTag page="Contact" />
      <Header />

      <Main>
        <h1 className="mt-4 text-3xl text-white text-center">Contact Page</h1>
      </Main>

      <Footer />
    </>
  );
}
