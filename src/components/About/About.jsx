import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Subtitle } from "../Subtitle/Subtitle";
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
      <p className={style.text}>
        仙台生まれの24歳。大学卒業後、本業はエンジニアではないが、フロントエンドを中心に学習中。Next.jsやThree.jsに力を入れている。好きな漫画はワンピース、最近はバウンティラッシュにハマっている。
      </p>
    </div>
  );
};
