import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderTag } from "@/components/HeadTag";
import { Main } from "@/components/Main";
import Image from "next/image";
import { client } from "../../../libs/client";
import styles from "./WorkContent.module.css";

export default function WorkId({ work }) {
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
            <h1 className="text-3xl font-extrabold">{work.title}</h1>
            <p className="mt-5">{work.publishedAt}</p>
            <Image
              loader={microCMSLoader}
              alt=""
              src={work.eyecatch.url}
              width={work.eyecatch.width}
              height={work.eyecatch.height}
              className="mt-5 w-full object-cover"
            />
            <div
              className={styles.article}
              dangerouslySetInnerHTML={{
                __html: `${work.content}`,
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
