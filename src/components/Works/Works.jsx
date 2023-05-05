import Image from "next/image";
import Link from "next/link";
import { Subtitle } from "../Subtitle";
import { WorksContent } from "../WorksContent";
import styles from "./Works.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export const Works = ({ works }) => {
  const fixedElement = useRef(null);
  const fixedElement_2 = useRef(null);
  const fixedElement_3 = useRef(null);
  const imageElement = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const fixedElements = [
      { element: fixedElement.current, end: "+=400" },
      { element: fixedElement_2.current, end: "+=400" },
      { element: fixedElement_3.current, end: "+=400" },
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
  }, []);

  return (
    <div className="bg-white pb-12">
      <div
        ref={fixedElement}
        id="content_1"
        className=" panel h-screen pt-8 text-center gap-8 lg:flex"
      >
        <div className="mt-16 lg:mt-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
          <h3 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Visions Lunettes
          </h3>
          <p className="text-md font-bold text-slate-600">
            Demo web site. I made this design and codes.
          </p>
        </div>
        <div className="image-container relative h-full w-full lg:w-1/2">
          <Image
            className="image-content absolute top-16 left-6 w-40 object-top z-30 object-cover lg:w-40 lg:top-40"
            alt=""
            src="/visions_top.png"
            width={300}
            height={600}
          />
          <Image
            className="image-content absolute top-32 right-6 w-32 z-20 object-cover lg:w-40 "
            alt=""
            src="/visions_action.png"
            width={300}
            height={600}
          />
          <Image
            className="image-content absolute top-40 left-[50%] translate-x-[-50%] w-40 z-30 object-top object-cover lg:w-56 lg:top-1/2 lg:-translate-y-1/2"
            alt=""
            src="/visions_recruit.png"
            width={300}
            height={600}
          />
        </div>
      </div>

      <div
        ref={fixedElement_2}
        id="content_2"
        className="panel h-screen  pt-8 text-center gap-8 lg:flex"
      >
        <div className="mt-16 lg:mt-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
          <h3 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Visions Lunettes
          </h3>
          <p className="text-md font-bold text-slate-600">
            Demo web site. I made this design and codes.
          </p>
        </div>
        <div className="image-container relative h-full w-full lg:w-1/2">
          <Image
            className="absolute top-16 left-6 w-40 object-top z-30 object-cover lg:w-40 lg:top-40"
            alt=""
            src="/visions_top.png"
            width={300}
            height={600}
          />
          <Image
            className="absolute top-32 right-6 w-32 z-20 object-cover lg:w-40 "
            alt=""
            src="/visions_action.png"
            width={300}
            height={600}
          />
          <Image
            className="absolute top-40 left-[50%] translate-x-[-50%] w-40 z-30 object-top object-cover lg:w-56 lg:top-1/2 lg:-translate-y-1/2"
            alt=""
            src="/visions_recruit.png"
            width={300}
            height={600}
          />
        </div>
      </div>

      <div
        ref={fixedElement_3}
        id="content_2"
        className="panel  h-screen pt-8 text-center gap-8 lg:flex"
      >
        <div className="mt-16 lg:mt-0 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
          <h3 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Visions Lunettes
          </h3>
          <p className="text-md font-bold text-slate-600">
            Demo web site. I made this design and codes.
          </p>
        </div>
        <div className="image-container relative h-full w-full lg:w-1/2">
          <Image
            className="absolute top-16 left-6 w-40 object-top z-30 object-cover lg:w-40 lg:top-40"
            alt=""
            src="/visions_top.png"
            width={300}
            height={600}
          />
          <Image
            className="absolute top-32 right-6 w-32 z-20 object-cover lg:w-40 "
            alt=""
            src="/visions_action.png"
            width={300}
            height={600}
          />
          <Image
            className="absolute top-40 left-[50%] translate-x-[-50%] w-40 z-30 object-top object-cover lg:w-56 lg:top-1/2 lg:-translate-y-1/2"
            alt=""
            src="/visions_recruit.png"
            width={300}
            height={600}
          />
        </div>
      </div>

      <Link
        className="mt-12 mx-auto flex items-center w-full max-w-xs justify-center gap-4 py-4 px-12 
          bg-slate-800 text-white rounded-lg active:bg-sky-500 hover:bg-sky-400
          transition-all"
        href={"/work"}
      >
        view all works
      </Link>
    </div>
  );
};
