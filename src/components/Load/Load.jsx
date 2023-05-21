import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import style from "./Load.module.scss";

export const Load = () => {
  const loadRef = useRef(null);
  const upperRef = useRef(null);
  const underRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const load = loadRef.current;
    const upper = upperRef.current;
    const under = underRef.current;
    const logo = logoRef.current;
    const line = lineRef.current;

    const loadingAnime = gsap.timeline();

    loadingAnime
      .to(logo, {
        duration: 0.5,
        ease: "power4.out",
        delay: 0.5,
        scale: 1,
        autoAlpha: 1,
      })
      .to(
        logo,
        {
          duration: 0.5,
          filter: "blur(5px)",
          autoAlpha: 0,          
        },
        "+=.7"
      )
      .to(
        line,
        {
          duration: 1,
          scale: 1,
          ease: "power4.inOut",
        },
        "+=.5"
      )
      .to(upper, {
        duration: 0.8,
        x: "-100%",
        ease: "power4.inOut",
      })
      .to(
        under,
        {
          duration: 0.8,
          x: "100%",
          ease: "power4.inOut",
        },
        "<"
      )
      .to(
        line,
        {
          autoAlpha: 0,
        },
        "<"
      )
      .set(load, {
        display: "none",
      });
  });

  return (
    <div ref={loadRef} className={style.container}>
      <span className={style.upper} ref={upperRef}></span>
      <span className={style.under} ref={underRef}></span>
      <span className={style.line} ref={lineRef}></span>
      <Image
        ref={logoRef}
        className={style.logo}
        src={"/next_logo.png"}
        height={250}
        width={250}
        alt="サイトのロゴ"
      />
    </div>
  );
};
