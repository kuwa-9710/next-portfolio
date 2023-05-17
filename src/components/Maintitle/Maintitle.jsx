import style from "./Maintitle.module.scss";

export const Maintitle = () => {
  return (
    <div className={style.container}>
      <span className={style.sub}>Hi! my name is ...</span>
      <h1 className={style.title}>Tomoya <span className={style.gradient}>Kuwa</span>shima</h1>
      <p className={style.text}>Web Developer in Sendai.</p>      
      <a
        href="https://github.com/kuwa-9710"
        className={style.button}
        target="_blank"
      >
        View it on Github
      </a>
    </div>
  );
};
