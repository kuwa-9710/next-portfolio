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
        <div className="h-screen flex justify-center items-center flex-col px-5">
          <h1 className="pt-16 text-3xl text-white text-center">
            Sorry! Contact page coming soon!
          </h1>
          <p className="mt-4 text-md text-white text-center">
            申し訳ございません。コンタクトページは準備中です。
          </p>
        </div>
      </Main>

      <Footer />
    </>
  );
}
