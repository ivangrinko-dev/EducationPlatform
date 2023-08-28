import Options from "../Options/Options";
import style from "./style.module.css";

function Footer() {
  const array = ["Home", "Textbook", "Statistics", "Sprint"];
  const array2 = ["alex", "Gabriel", "Marcus"];

  return (
    <div className={style.bigWrapper}>
      <div className={style.wrapper}>
        <div className={style.txt}>
          <Options array={array} />
        </div>
        <div className={style.txt1}>
          <Options array={array2} />
        </div>
      </div>
      <hr />
      <div className={style.miniWrapper}>
        <div className={style.img}>
          <div className={style.img30}></div>
          <div className={style.img33}></div>
          <div className={style.img31}></div>
        </div>
        <div className={style.end}>©2021 Hschool. Project for Hschool.</div>
      </div>
    </div>
  );
}

export default Footer;
