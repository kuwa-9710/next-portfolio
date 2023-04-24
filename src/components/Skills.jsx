import { Skillcards } from "./Skillcards";
import { Subtitle } from "./Subtitle";

export const Skills = (props) => {
  return (
    <div className="bg-white z-10">
      <div className="w-full mx-auto max-w-3xl md:max-w-4xl px-4 py-16">
        <Subtitle title="My skills" />
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-slate-800 mt-4 md:mt-16 leading-[150%] md:leading-[150%]">
          最新のテクノロジーを駆使して、スマートなウェブサイトを実現します。
        </h2>
        <p className="text-gray-500 text-sm font-bold md:text-md mt-8 leading-loose md:leading-[150%]">
          私は、常に最新のテクノロジーを取り入れることで、高品質かつスマートなウェブサイトを実現しています。フロントエンド開発においては、ReactやNext.js、Three.jsなどの人気のフレームワークを使用し、高速でレスポンシブなウェブサイトを構築することができます。
        </p>
        <Skillcards />
      </div>
    </div>
  );
};
