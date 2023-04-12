import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main";
import { HeaderTag } from "@/components/HeadTag";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {  
  return (
    <>
      <HeaderTag page="Contact" />
      <Header />

      <Main>
        <h1 className="mt-4 text-3xl text-white text-center">Contact Page</h1>
      </Main>

      <Footer />
    </>
  );
}