import { Maintitle } from "../Maintitle/Maintitle";
import { Scroll } from "../Scroll/Scroll";
import { ThreeCanvas } from "../ThreeCanvas";
import style from "./Mv.module.scss";

export const Mv = (props) => {
  return (
    <div id="mv" className={style.wrapper}>
      <div className={style.container}>
        <ThreeCanvas />
        <Maintitle />
        <Scroll />
      </div>
    </div>
  );
};
