import style from "./style.module.css";
function Preview() {
  return (
    <div className={style.preview}>
      <div className={style.previewInfo}>
        <p className = {style.previewAbout}>E-COURSE PLATFORM</p>
        <h1>Learning and teaching online, made easy.</h1>
        <p clossName={style.textInfo}>
          Any subject, in any language, on any device, for all ages!
        </p>
      </div>
      <div className={style.previewIng}></div>
    </div>
  );
}

export default Preview;
