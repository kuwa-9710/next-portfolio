import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Subtitle } from "../Subtitle";
import style from "./About.module.scss";

export const AboutMe = (props) => {
  return (
    <div className={style.wrapper}>
      <Subtitle title="About me" />
      <Image
        src="/my_icon.jpg"
        alt="Tomoyaのミー文字アイコン"
        width={300}
        height={300}
        className={style.image}
      />
      <span className={style.name}>Tomoya Kuwashima</span>
      <span className={style.location}>
        <FontAwesomeIcon className="w-3" icon={faLocationDot} />
        in Sendai.
      </span>
    </div>
  );
};
