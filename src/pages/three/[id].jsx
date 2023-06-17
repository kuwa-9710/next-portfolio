import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { HeaderTag } from "@/components/HeadTag";
import { Main } from "@/components/Main";
import Image from "next/image";
import { client } from "../../../libs/client";
import styles from "./threePage.module.css";

export default function ShaderId({ shader }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  return (
    <>
      <HeaderTag page="Top" />
      <Header />
      <Main>
        <div className="py-20">
          <article className="article text-slate-700 bg-white backdrop-blur-lg min-h-screen max-w-[800px] mx-auto p-8 rounded-2xl">
            <h1 className="text-3xl font-extrabold">{shader.title}</h1>
            <p className="mt-5">{shader.publishedAt}</p>
            <Image
              loader={microCMSLoader}
              alt=""
              src={shader.eyecatch.url}
              width={shader.eyecatch.width}
              height={shader.eyecatch.height}
              className="mt-5 w-full object-cover"
            />
            <div
              className={styles.article}
              dangerouslySetInnerHTML={{
                __html: `${shader.contents}`,
              }}
            ></div>
          </article>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "shader", contentId: id });

  console.log(data);

  return {
    props: {
      shader: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "shader" });
  const paths = data.contents.map((content) => `/three/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};
