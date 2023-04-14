import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderTag } from "@/components/HeadTag";
import { Main } from "@/components/Main";
import { WorksContent } from "@/components/WorksContent";
import { client } from "../../libs/client";

export default function Work({ work }) {
  return (
    <>
      <HeaderTag page=" 制作実績" />
      <Header />

      <Main>
        <div className="pt-16 px-4">
          <h1 className="pt-4 text-3xl text-white text-center">Work Page</h1>
          <WorksContent works={work} />
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
