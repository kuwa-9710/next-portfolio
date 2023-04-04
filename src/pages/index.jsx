import Head from "next/head";
import styles from "@/styles/Home.module.css";
import * as THREE from "three";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { ThreeCanvas } from "@/components/ThreeCanvas";
import { Main } from "@/components/Main";
import { Maintitle } from "@/components/Maintitle";
import { Mv } from "@/components/mv";

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
        <Mv>
          <ThreeCanvas />
          <Maintitle />
        </Mv>
      </Main>

      <Footer />
    </>
  );
}
