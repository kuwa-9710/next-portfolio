import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { ThreeCanvas } from "@/components/ThreeCanvas";
import { Main } from "@/components/Main";
import { Maintitle } from "@/components/Maintitle";
import { Skills } from "@/components/Skills/Skills";
import { Works } from "@/components/Works/Works";
import { createClient } from "microcms-js-sdk";
import { AboutMe } from "@/components/About/About";
import { HeaderTag } from "@/components/HeadTag";
import { Mv } from "@/components/Mv/Mv";

export default function Home({ works }) {
  return (
    <div className="scrollbar scrollbar-thumb-sky-400 scrollbar-track-gray-100">
      <HeaderTag page="Top" />

      <Header />

      <Main>
        <Mv />
        <Skills />
        <Works works={works} />
        <AboutMe />
      </Main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    serviceDomain: "tomoworks0941",
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
  });

  const data = await client.get({
    endpoint: "works",
  });

  return {
    props: {
      works: data.contents,
    },
  };
}
