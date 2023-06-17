import Image from "next/image";
import Link from "next/link";
import style from "./Works.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Subtitle } from "../Subtitle/Subtitle";

export const Works = ({ works }) => {
  const element_1_Ref = useRef(null);
  const element_2_Ref = useRef(null);
  const element_3_Ref = useRef(null);
  const cta = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const element_1 = element_1_Ref.current;
    const element_2 = element_2_Ref.current;
    const element_3 = element_3_Ref.current;
    const ctaElement = cta.current;

    gsap.from(element_1, {
      autoAlpha: 0,
      y: 100,
      scrollTrigger: {
        trigger: element_1,
        start: "center bottom",
        end: "center center",
      },
    });

    gsap.from(element_2, {
      autoAlpha: 0,
      y: 100,
      scrollTrigger: {
        trigger: element_2,
        start: "center bottom",
        end: "center center",
      },
    });

    gsap.from(element_3, {
      autoAlpha: 0,
      y: 100,
      scrollTrigger: {
        trigger: element_3,
        start: "center bottom",
        end: "center center",
      },
    });

    gsap.from(ctaElement, {
      autoAlpha: 0,
      y: 100,
      scrollTrigger: {
        trigger: ctaElement,
        start: "center bottom",
        end: "center center",
      },
    });
  }, []);

  return (
    <>
      <div className={style.wrapper}>
        <div className="translate-y-12">
          <Subtitle title="My Works"></Subtitle>
        </div>
        <div ref={element_1_Ref} id="content_1" className={style.content}>
          <div className={style.title_container}>
            <h3 className={style.title}>Visions Lunettes</h3>
            <p className={style.sub}>
              Demo web site. I made this design and codes.
              <span>
                Tools & Codes: HTML, CSS, javascript, scss, Figma, Photoshop.
              </span>
            </p>
            <a
              href="https://kuwa-9710.github.io/visions_lunettes/"
              className={style.link}
              target="blank"
            >
              Visit site
            </a>
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

        <div ref={element_2_Ref} id="content_2" className={style.content}>
          <div className={style.title_container}>
            <h3 className={style.title}>TOKYO PROTEIN</h3>
            <p className={style.sub}>
              Demo EC web site. I made this design.
              <span>Tools & Codes: Figma, Photoshop</span>
            </p>
            <Link href={"/work/p3qhtx952p"} className={style.link}>
              View Detail
            </Link>
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

        <div ref={element_3_Ref} id="content_3" className={style.content}>
          <div className={style.title_container}>
            <h3 className={style.title}>Simple Note</h3>
            <p className={style.sub}>
              This is original web application. I made this design and code by
              Laravel.
              <br />
              Tools & Codes: HTML, CSS, PHP, javascript, Laravel, MySQL,
              Node.js.
            </p>
            <Link href={"/work/oe6rnsyne-uv"} className={style.link}>
              View Detail
            </Link>
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

        <div ref={cta} className={style.button_container}>
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
    </>
  );
};
