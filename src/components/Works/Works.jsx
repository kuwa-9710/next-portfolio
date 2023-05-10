import Image from "next/image";
import Link from "next/link";
import style from "./Works.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Subtitle } from "../Subtitle/Subtitle";

export const Works = ({ works }) => {
  const fixedElement = useRef(null);
  const fixedElement_2 = useRef(null);
  const fixedElement_3 = useRef(null);
  const imageElement = useRef(null);

  const ctaElement = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const fixedElements = [
      { element: fixedElement.current, end: "+=200" },
      { element: fixedElement_2.current, end: "+=200" },
      { element: fixedElement_3.current, end: "+=200" },
    ];

    fixedElements.forEach(({ element, end }, index) => {
      gsap.from(element, {
        y: "200",
        opacity: 0,
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          end: end,
          scrub: true,
          pin: "top",
          pinSpacing: false,
        },
      });
    });

    const cta = ctaElement.current;    
    gsap.timeline().from(cta, {
      scaleX: 0,                  
      ease: "ease-out",
      scrollTrigger: {
        trigger: cta,
        start: "top 80%",
        end: "top 50%",
        scrub: true,        
      },
    })    
  }, []);

  return (
    <div className={style.wrapper}>
      <div className="translate-y-12">
        <Subtitle title="My Works"></Subtitle>
      </div>
      <div ref={fixedElement} id="content_1" className={style.content}>
        <div className={style.title_container}>
          <h3 className={style.title}>Visions Lunettes</h3>
          <p className={style.sub}>
            Demo web site. I made this design and codes.
          </p>
        </div>
        <div className={style.image_container}>
          <Image
            className={style.image}
            alt=""
            src="/visions_top.png"
            width={300}
            height={600}
          />
          <Image
            className={style.image}
            alt=""
            src="/visions_action.png"
            width={300}
            height={600}
          />
          <Image
            className={style.image}
            alt=""
            src="/visions_recruit.png"
            width={300}
            height={600}
          />
        </div>
      </div>

      <div ref={fixedElement_2} id="content_2" className={style.content}>
        <div className={style.title_container}>
          <h3 className={style.title}>TOKYO PROTEIN</h3>
          <p className={style.sub}>
            架空のECサイト。FigmaでデザインしたオリジナルWebサイト
          </p>
        </div>
        <div className={style.image_container}>
          <Image
            className={style.image}
            alt=""
            src="/tokyo_protein_category.png"
            width={300}
            height={600}
          />
          <Image
            className={style.image}
            alt=""
            src="/tokyo_protein_banana.png"
            width={300}
            height={600}
          />
          <Image
            className={style.image}
            alt=""
            src="/tokyo_protein_top.png"
            width={300}
            height={600}
          />
        </div>
      </div>

      <div ref={fixedElement_3} id="content_3" className={style.content}>
        <div className={style.title_container}>
          <h3 className={style.title}>Simple Note</h3>
          <p className={style.sub}>
            オリジナルのWebアプリケーションです。
            <br />
            Laravel 9を使用して作成しました。
          </p>
        </div>
        <div className={style.image_container}>
          <Image
            className={style.image}
            alt=""
            src="/note_item.png"
            width={300}
            height={600}
          />
          <Image
            className={style.image}
            alt=""
            src="/note_login.png"
            width={300}
            height={600}
          />
          <Image
            className={style.image}
            alt=""
            src="/note_top.png"
            width={300}
            height={600}
          />
        </div>
      </div>

      <div ref={ctaElement} className={style.button_container}>
        <span className={style.button_title}>
          You can see<br></br>all works below.
        </span>
        <p className={style.button_text}>
          以下のボタンをクリックすると、Worksの一覧ページへ遷移します。
        </p>
        <Link className={style.button} href={"/work"}>
          view all works
        </Link>
      </div>
    </div>
  );
};
