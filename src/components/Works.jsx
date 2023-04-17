import Link from "next/link";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";
import { WorksContent } from "./WorksContent";

export const Works = ({ works }) => {
  return (
    <div className="bg-slate-900">
      <div className=" w-full mx-auto max-w-5xl px-4 py-28 md:py-48">
        <Subtitle title="My Works" />
        <Title title="美しく、使いやすく、効果的になるよう心掛けています" />
        <WorksContent works={works} />
        <Link
          className="mt-12 mx-auto flex items-center w-full max-w-xs justify-center gap-4 py-4 px-12 
          bg-slate-800 text-white rounded-lg active:bg-sky-500 hover:bg-sky-400
          transition-all"
          href={"/work"}
        >
          view all works
        </Link>
      </div>
    </div>
  );
};
