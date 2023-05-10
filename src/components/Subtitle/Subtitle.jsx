import style from "./Subtitle.module.scss"

export const Subtitle = (props) => {
  return (
    <span className={style.sub_title}>
      {props.title}
    </span>
  );
};
