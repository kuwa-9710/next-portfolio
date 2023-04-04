import { SectionText } from "./SectionText";
import { Skillcards } from "./Skillcards";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const Skills = (props) => {
  return (
    <div className="w-full mx-auto max-w-5xl px-4">
      <Subtitle title="My skills" />
      <Title title="最新のテクノロジーを駆使して、スマートなウェブサイトを実現します。" />
      <SectionText title="私は、常に最新のテクノロジーを取り入れることで、高品質かつスマートなウェブサイトを実現しています。フロントエンド開発においては、ReactやVue.js、Three.jsなどの人気のフレームワークを使用し、高速でレスポンシブなウェブサイトを構築することができます。" />
      <Skillcards />
    </div>
  );
};
