import Link from "next/link";
import { client } from "../../libs/client";

export default function Work({ work }) {
  return (
    <div>
      <ul>
        {work.map((work) => (
          <li key={work.id}>
            <Link href={`/work/${work.id}`}>{work.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      work: data.contents,
    },
  };
};
