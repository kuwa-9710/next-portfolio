import { Maintitle } from "../Maintitle";
import { ThreeCanvas } from "../ThreeCanvas";
import style from "./Mv.module.scss";

export const Mv = (props) => {
  return (
    <div id="mv" className={style.wrapper}>
      <div className={style.container}>
        <ThreeCanvas />
        <Maintitle />
      </div>
    </div>
  );
};
