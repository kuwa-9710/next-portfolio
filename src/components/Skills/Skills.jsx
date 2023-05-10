import { gsap } from "gsap";
import { Subtitle } from "../Subtitle/Subtitle";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import style from "./Skill.module.scss";
import classNames from "classnames";

export const Skills = (props) => {
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const [card_1_isActive, set_1_isActive] = useState(false);
  const [card_2_isActive, set_2_isActive] = useState(false);
  const [card_3_isActive, set_3_isActive] = useState(false);

  const card_1_class = classNames(style.card, {
    [style.active]: card_1_isActive,
  });

  const card_2_class = classNames(style.card, {
    [style.active]: card_2_isActive,
  });

  const card_3_class = classNames(style.card, {
    [style.active]: card_3_isActive,
  });

  const spanClass_1 = classNames(style.box, {
    [style.active]: card_1_isActive,
  });
  const spanClass_2 = classNames(style.box, {
    [style.active]: card_2_isActive,
  });
  const spanClass_3 = classNames(style.box, {
    [style.active]: card_3_isActive,
  });

  const cardContent_1 = classNames(style.card_content, {
    [style.active]: card_1_isActive,
  });
  const cardContent_2 = classNames(style.card_content, {
    [style.active]: card_2_isActive,
  });
  const cardContent_3 = classNames(style.card_content, {
    [style.active]: card_3_isActive,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardRefs.forEach((cardRef, index) => {
      const card = cardRef.current;
      const setStateActive = `set_${index + 1}_isActive`;

      ScrollTrigger.create({
        trigger: card,
        start: "top 45%",
        onEnter: () => {
          eval(setStateActive)(true);
        },
        onLeaveBack: () => {
          eval(setStateActive)(false);
        },
      });
    });
  });

  return (
    <div className={style.container}>      
      <Subtitle title="My Skills"></Subtitle>
      <div className={style.contents}>
        <div className={card_1_class} ref={cardRefs[0]}>
          <span className={spanClass_1}></span>
          <div className={cardContent_1}>
            <span className={style.card_title}>Coding</span>
            <p className={style.card_text}>
              HTML,CSS(Sass),javascriptを使用してレスポンシブなWebサイトを構築できます。また、ReactやNext.jsを使用してインタラクティブなサイトも作成可能です。
            </p>
          </div>
        </div>
        <div className={card_2_class} ref={cardRefs[1]}>
          <span className={spanClass_2}></span>
          <div className={cardContent_2}>
            <span className={style.card_title}>Design</span>
            <p className={style.card_text}>
              魅力的なUI/UXデザインを実現し、ユーザーエクスペリエンスを最適化します。Figmaを使い、あなたのウェブサイトを美しく仕上げます。
            </p>
          </div>
        </div>
        <div className={card_3_class} ref={cardRefs[2]}>
          <span className={spanClass_3}></span>
          <div className={cardContent_3}>
            <span className={style.card_title}>WordPress</span>
            <p className={style.card_text}>
              高機能なWordPressサイトを制作し、いつでも更新可能なWebサイトを作成します。SEO対策やセキュリティ対策にも配慮しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
