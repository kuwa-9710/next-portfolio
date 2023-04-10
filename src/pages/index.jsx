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

export default function Home({ works }) {
  return (
    <>
      <Head>
        <title>Portfolio | Top</title>
        <link rel="shortcut icon" href="site_icon.ico" type="image/x-icon" />
      </Head>
      <Header />

      <Main>
        <Mv>
          <ThreeCanvas />
          <Maintitle />
        </Mv>
        <Skills />
        <Works works={works} />
        <Footer />
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    serviceDomain: "tomoworks0941",
    apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
  });

  const data = await client.get({
    endpoint: "blogs",
  });

  return {
    props: {
      works: data.contents,
    },
  };
}
