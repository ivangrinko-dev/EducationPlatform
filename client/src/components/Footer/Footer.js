import style from "./style.module.css";

function Footer() {
  return (
    <div className={style.bigWrapper}>
      <div className={style.wrapper}>
        <div className={style.txt}>
          <p>Home</p>
          <p>Textbook</p>
          <p>Statistics</p>
          <p>Sprint</p>
        </div>
        <div className={style.txt1}>
          <p>Alex</p>
          <p>Gabriel</p>
          <p>Marcus</p>
        </div>
      </div>
<hr/>
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
