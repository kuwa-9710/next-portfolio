import { SectionText } from "./SectionText";
import { Skillcards } from "./Skillcards";
import { Subtitle } from "./Subtitle";

export const Skills = (props) => {
  return (
    <div className="bg-white z-10">
      <div className="w-full mx-auto max-w-3xl px-4 py-16">
        <Subtitle title="My skills" />
        <h2 className="text-4xl md:5xl lg:text-6xl font-bold text-slate-800 mt-4 md:mt-16 leading-[150%] md:leading-[150%]">
          最新のテクノロジーを駆使して、スマートなウェブサイトを実現します。
        </h2>
        <SectionText title="私は、常に最新のテクノロジーを取り入れることで、高品質かつスマートなウェブサイトを実現しています。フロントエンド開発においては、ReactやNext.js、Three.jsなどの人気のフレームワークを使用し、高速でレスポンシブなウェブサイトを構築することができます。" />
        <Skillcards />
      </div>
    </div>
  );
};
