import style from "./Scroll.module.scss";

export const Scroll = () => {
  return (
    <>
      <span className={style.container}>
        <span className={style.content}>
          <span className={style.arrow}></span>
          <span className={style.arrow}></span>
          <span className={style.arrow}></span>
        </span>
        <span className={style.text}>Scroll Down</span>
      </span>
    </>
  );
};
