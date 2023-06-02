import style from "./3dContent.module.scss";
import { Subtitle } from "../Subtitle/Subtitle";

export const Contents_3D = () => {
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.container}>
        <Subtitle title="3D-Contents" />
        <span className={style.title}>Comming Soon!</span>
        <p className={style.text}>3Dコンテンツは準備中です。Githubからソースコードを閲覧することができます。</p>
      </div>
    </div>
    </>
  );
};
