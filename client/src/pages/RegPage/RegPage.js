import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Inputs from "../../components/Inputs/Inputs";
import style from "./style.module.css";

function RegPage() {
  const array = ["name", "surname", "email", "pwd"];

  return (
    <div>
      <Header />
      <div className={style.regpage}>
        <div className={style.info}>
          <h1>Sign Upp</h1>
          <Inputs array={array} />
          <div className={style.btn}>Sign Upp</div>
        </div>
        <div className={style.img}></div>
      </div>
      <Footer />
    </div>
  );
}

export default RegPage;
