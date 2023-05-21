import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderTag } from "@/components/HeadTag";
import { Main } from "@/components/Main";
import { WorksContent } from "@/components/WorksContent";
import { client } from "../../libs/client";
import { BackToHome } from "@/components/BackToHome/BackToHome";

export default function Work({ work }) {
  return (
    <>
      <HeaderTag page="制作実績" />
      <Header />

      <Main>
        <div className="py-16 px-4 bg-[#020617]">
          <h1 className="pt-16 text-3xl text-white text-center">WORKS PAGE</h1>
          <WorksContent works={work} />
          <BackToHome />
        </div>
      </Main>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      work: data.contents,
    },
  };
};
