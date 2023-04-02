import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import * as THREE from "three";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { ThreeCanvas } from "@/components/ThreeCanvas";
import { Main } from "@/components/Main";
import { Maintitle } from "@/components/Maintitle";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { News } from "@/components/News";
import { Works } from "@/components/Works";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(THREE);
  return (
    <>
      <Head>
        <title>Portfolio | Top</title>
        <link rel="shortcut icon" href="site_icon.ico" type="image/x-icon" />
      </Head>
      <Header />

      <Main>
        <ThreeCanvas />
        <Maintitle />
        <About />
        <Skills />
        <News />
        <Works />
      </Main>

      <Footer />
    </>
  );
}
