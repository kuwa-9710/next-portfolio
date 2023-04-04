import { Skillcards } from "./Skillcards";

export const Skills = (props) => {
  return (
    <div className="w-full mx-auto max-w-5xl px-4">
      <span className="text-slate-500 text-lg md:text-4xl">My skills ...</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mt-6 leading-[1.5em]">
        最新のテクノロジーを駆使して、スマートなウェブサイトを実現します。
      </h2>
      <p className="text-slate-500 text-md mt-6 leading-loose">
        私は、常に最新のテクノロジーを取り入れることで、高品質かつスマートなウェブサイトを実現しています。フロントエンド開発においては、ReactやVue.js、Three.jsなどの人気のフレームワークを使用し、高速でレスポンシブなウェブサイトを構築することができます。
      </p>
      <Skillcards />
    </div>
  );
};
