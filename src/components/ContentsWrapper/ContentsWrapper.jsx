import styles from "./CotentsWrapper.module.scss";

export const ContentsWrapper = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.boxes}>
          <div className="box_1"></div>
          <div className="box_2"></div>
          <div className="box_3"></div>
          <div className="box_4"></div>
          <div className="box_5"></div>
          <div className="box_6"></div>
          <div className="box_7"></div>
          <div className="box_8"></div>
          <div className="box_9"></div>
          <div className="box_10"></div>
          <div className="box_11"></div>
          <div className="box_12"></div>
          <div className="box_13"></div>
          <div className="box_14"></div>
          <div className="box_15"></div>
          <div className="box_16"></div>
          <div className="box_17"></div>
        </div>
        {props.children}
      </div>
    </div>
  );
};
