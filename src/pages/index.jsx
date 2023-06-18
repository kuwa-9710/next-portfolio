import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main";
import { Skills } from "@/components/Skills/Skills";
import { Works } from "@/components/Works/Works";
import { createClient } from "microcms-js-sdk";
import { AboutMe } from "@/components/About/About";
import { HeaderTag } from "@/components/HeadTag";
import { Mv } from "@/components/Mv/Mv";
import { Contents_3D } from "@/components/3dContents/3dContents";
import { Load } from "@/components/Load/Load";
import { ContentsWrapper } from "@/components/ContentsWrapper/ContentsWrapper";

export default function Home({ works, shaders }) {
  return (
    <div className="scrollbar scrollbar-thumb-sky-400 scrollbar-track-gray-100">
      <HeaderTag page="Top" />

      <Load />

      <Header />

      <Main>
        <Mv />
        <ContentsWrapper>
          <Skills />
          <Works works={works} />
          <Contents_3D shaders={shaders} />
        </ContentsWrapper>
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

  const worksData = await client.get({
    endpoint: "works",
  });

  const shadersData = await client.get({
    endpoint: "shader",
  });

  return {
    props: {
      works: worksData.contents,
      shaders: shadersData.contents,
    },
  };
}
