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
          <div className={style.previewBg}>About platform</div>

          <div className={style.miniWrapper}>
            <div className={style.imgWrapper}>
              <div className={style.flash}></div>
              <div className={style.number}></div>
            </div>
            <div className={style.students}>Students</div>
          </div>
        </div>
        <div className={style.bigImg}></div>
      </div>

      <div className={style.learn}>
        <div className={style.img}></div>
        <div className={style.info}>
          <h1>Learn a language in a playful way</h1>
          <p>Make learning programming languages more fun with mini-games</p>
          <div className={style.icons}>
            <div className={style.icon1}></div>
            <div className={style.icon2}></div>
          </div>
        </div>
      </div>

      <div className={style.knowledge}>
        <div className={style.info}>
          <h1>Increase your knowledge</h1>
          <p>Traditional and new effective approaches to learning languages</p>
          <div className={style.btnKnow}>Textbook →</div>
        </div>
        <div className={style.img}></div>
      </div>

      <div className={style.progress}>
                <div className={style.img}></div>
                <div className={style.info}>
                    <h1>Watch your progress every day</h1>
                    <p>Save statistics on your achievements and mistakes</p>
                    <div className={style.btnKnow}>Statistics →</div>
                </div>

            </div>

    </div>
  );
}

export default Preview;
