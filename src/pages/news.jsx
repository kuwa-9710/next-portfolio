import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderTag } from "@/components/HeadTag";
import { Main } from "@/components/Main";

export default function News() {
  return (
    <>
      <HeaderTag page="News" />
      <Header />

      <Main>
        <h1 className="mt-4 text-3xl text-white text-center">News Page</h1>
      </Main>

      <Footer />
    </>
  );
}
