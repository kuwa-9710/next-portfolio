import { faFigma, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./Card";

export const Skillcards = (props) => {
  const items = [
    {
      id: 1,
      icon: (
        <FontAwesomeIcon icon={faCode} className="h-6 text-pink-500" />
      ),
      title: "Coding",
      titleClass:
        "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-pink-500",
      description:
        "HTML,CSS(Sass),javascriptを使用してレスポンシブなWebサイトを構築できます。また、ReactやNext.jsを使用してインタラクティブなサイトも作成可能です。",
    },
    {
      id: 2,
      icon: (
        <FontAwesomeIcon icon={faFigma} className="h-6 text-green-500" />
      ),
      title: "Design",
      titleClass:
        "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-emerald-400",
      description:
        "魅力的なUI/UXデザインを実現し、ユーザーエクスペリエンスを最適化します。Figmaを使い、あなたのウェブサイトを美しく仕上げます。",
    },
    {
      id: 3,
      icon: (
        <FontAwesomeIcon icon={faWordpress} className="h-6 text-sky-500" />
      ),
      title: "WordPress",
      titleClass:
        "font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-blue-400",
      description:
        "高機能なWordPressサイトを制作し、いつでも更新可能なWebサイトを作成します。SEO対策やセキュリティ対策にも配慮しています。",
    }
  ];

  return (
    <div className="w-full mx-auto max-w-5xl md:max-w-none flex flex-col lg:justify-between lg:flex-row gap-8 lg:gap-0 mt-24">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            titleClass={item.titleClass}
            description={item.description}
          />
        );
      })}
      ;
    </div>
  );
};
