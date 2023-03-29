import Head from "next/head";
import { Inter } from "next/font/google";
import * as THREE from "three";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(THREE);
  return (
    <>
      <Head>
        <title>Portfolio | News</title>
      </Head>
      <Header />

      <Main>
        <h1 className="text-3xl text-white text-center">News Page</h1>
      </Main>

      <Footer />
    </>
  );
}
