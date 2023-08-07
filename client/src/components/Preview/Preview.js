import style from "./style.module.css";
function Preview() {
  return (
    <div className={style.wrapper}>
      <div className={style.preview}>
        <div className={style.previewInfo}>
          <p className={style.previewAbout}>E-COURSE PLATFORM</p>
          <h1>Learning and teaching online, made easy.</h1>
          <p className={style.textInfo}>
            Any subject, in any language, on any device, for all ages!
          </p>
          <div className={style.previewBg}>
            <div className={style.previewIng}>About platform</div>
          </div>

          <div className={style.miniWrapper}>
            <div className={style.imgWrapper}>
              <div className={style.flash}></div>
              <div className={style.number}></div>
            </div>
            <div className={style.students}>Students</div>
          </div>
        </div>
      </div>

      <div className={style.bigImg}></div>
    </div>
  );
}

export default Preview;
