import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderTag } from "@/components/HeadTag";
import { Main } from "@/components/Main";
import Image from "next/image";
import { client } from "../../../libs/client";

export default function WorkId({ work }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  return (
    <>
      <HeaderTag page="Top" />
      <Header />
      <Main>
        <div className="pt-16">
          <div className="text-slate-700 bg-white min-h-screen">
            <h1>{work.title}</h1>
            <p>{work.publishedAt}</p>
            <Image
              loader={microCMSLoader}
              alt=""
              src={work.eyecatch.url}
              width={work.eyecatch.width}
              height={work.eyecatch.height}
              className="w-full h-56 object-cover"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: `${work.content}`,
              }}
            ></div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  console.log(data);

  return {
    props: {
      work: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });
  const paths = data.contents.map((content) => `/work/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};
