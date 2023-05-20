import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderTag } from "@/components/HeadTag";
import { Main } from "@/components/Main";
import style from "./about.module.scss";
import { AboutMe } from "@/components/About/About";
import { BackToHome } from "@/components/BackToHome/BackToHome";

export default function About() {
  return (
    <>
      <HeaderTag page="About" />

      <Header />

      <Main>
        <div className={style.container}>
          <AboutMe />
          <BackToHome />
        </div>
      </Main>

      <Footer />
    </>
  );
}
