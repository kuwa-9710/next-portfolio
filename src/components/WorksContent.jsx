import Image from "next/image";
import Link from "next/link";

export function WorksContent({ works }) {

  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  return (
    <>
      <ul className="mt-16 flex flex-row gap-8 flex-wrap">
        {works.map((work) => (
          <li key={work.id}>
            <Link className="text-white" href={`/work/${work.id}`}>
              <Image
                loader={microCMSLoader}
                alt=""
                src={work.eyecatch.url}
                width={work.eyecatch.width}
                height={work.eyecatch.height}
                className="w-full md:w-80 h-56 rounded-2xl object-cover"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
