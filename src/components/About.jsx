// import { SectionText } from "./SectionText";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Subtitle } from "./Subtitle";

export const AboutMe = (props) => {
  return (
    <div className="w-full mx-auto max-w-5xl px-4 mt-28 flex flex-col justify-center text-center">
      <Subtitle title="About me" />
      <Image
        src="/my_icon.jng"
        alt="Tomoyaのミー文字アイコン"
        width={300}
        height={300}
      />
      <h2 className="text-slate-300">Tomoya Kuwashima</h2>
      <span className="text-slate-300 flex felx-row gap-4">
        <FontAwesomeIcon className="w-3" icon={faLocationDot} />
        in Sendai.
      </span>
    </div>
  );
};
