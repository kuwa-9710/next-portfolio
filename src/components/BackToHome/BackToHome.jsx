import Link from "next/link";
import style from "./BackToHome.module.scss";

export const BackToHome = () => {
  return (
    <div className={style.container}>
      <Link href={"/"} className={style.button}>
        ←
      </Link>
    </div>
  );
};
