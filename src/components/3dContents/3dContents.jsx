import style from "./3dContent.module.scss";
import { Subtitle } from "../Subtitle/Subtitle";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contents_3D({ shaders }) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  const elementRefs = useRef([]);

  useEffect(() => {
    const elements = elementRefs.current;

    elements.forEach((element) => {
      gsap.set(element, { y: "100%", opacity: 0 });

      gsap.to(element, {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "center bottom",
        },
      });
    });
  });

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Subtitle title="3D-Contents" />          
          <ul className={style.content__wrapper}>
            {shaders.map((shader, index) => (
              <li
                className={style.content}
                key={shader.id}
                ref={(el) => (elementRefs.current[index] = el)}
              >
                <Link className="text-white" href={`/three/${shader.id}`}>
                  <Image
                    loader={microCMSLoader}
                    alt=""
                    src={shader.eyecatch.url}
                    width={shader.eyecatch.width}
                    height={shader.eyecatch.height}
                    className="w-full md:w-80 aspect-[1.618/1] rounded-2xl object-cover"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
