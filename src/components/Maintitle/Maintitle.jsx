import style from "./Maintitle.module.scss";

export const Maintitle = () => {
  return (
    <div className={style.container}>
      <span className={style.sub}>Hi! my name is ...</span>
      <h1 className={style.title}>Tomoya Kuwashima</h1>
      <p className={style.text}>Web Developer in Sendai.</p>
      {/* <a
        href="https://github.com/kuwa-9710"
        className="
          transition-all before:content-[url('/github.svg')] before:w-[30px] before:h-[30px]"
        target="_blank"
      > */}
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
