import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { ThreeCanvas } from "@/components/ThreeCanvas";
import { Main } from "@/components/Main";
import { Maintitle } from "@/components/Maintitle";
import { Mv } from "@/components/Mv";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";
import { createClient } from "microcms-js-sdk";
import { HeaderTag } from "@/components/HeadTag";
import { AboutMe } from "@/components/About";

export default function Home({ works }) {
  return (
    <>
      <HeaderTag page="Top" />
      <Header />

      <Main>
        <Mv>
          <ThreeCanvas />
          <Maintitle />
        </Mv>
        <Skills />
        <Works works={works} />
        <AboutMe />
      </Main>
      
      <Footer />
    </>
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
