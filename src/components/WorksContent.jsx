import Image from "next/image";
import Link from "next/link";

export function WorksContent({ works }) {
  console.log("私も!" + works);

  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  return (
    <>
      <ul className="mt-16 flex flex-row gap-8">
        {works.map((work) => (
          <li key={work.id}>
            <Link className="text-white" href={`/work/${work.id}`}>
              <Image
                loader={microCMSLoader}
                alt=""
                src={work.eyecatch.url}
                width={work.eyecatch.width}
                height={work.eyecatch.height}
                className="w-80 h-64 rounded-2xl object-cover"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
