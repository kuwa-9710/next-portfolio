import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import style from "./Subtitle.module.scss";
import classNames from "classnames";

const cx = classNames.bind(style);

export const Subtitle = (props) => {
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const target = targetRef.current;

    if (!isActive && target) {
      let newText = "";
      const spanText = target.innerHTML;
      spanText.split("").forEach((char) => {
        newText += "<span>" + char + "</span>";
      });
      target.innerHTML = newText;

      let spans = target.querySelectorAll("span");
      gsap.fromTo(
        spans,
        {
          autoAlpha: 0,
          y: -50,
          rotateZ: -50,
        },
        {
          duration: 0.25,
          autoAlpha: 1,
          y: 0,
          rotateZ: 0,
          stagger: {
            each: 0.05,
          },
          scrollTrigger: {
            trigger: target,
            start: "top 80%",
          },
        }
      );
    }
  }, [isActive]);  

  return (
    <span
      ref={targetRef}
      className={cx(style.sub_title, { [style.active]: isActive })}
    >
      {props.title}
    </span>
  );
};
