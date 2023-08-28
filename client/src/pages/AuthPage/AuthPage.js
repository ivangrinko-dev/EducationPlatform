import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Inputs from "../../components/Inputs/Inputs";
import style from "./style.module.css";

function AuthPage() {
  const array = ["emai", "pwd"];
  

  return (
    <div>
      <Header />

      <div className={style.authpage}>
        <div className={style.info}>
          <h1>Login</h1>
          <Inputs array = {array}/>
          <div className={style.btn}>Login</div>
        </div>
        <div className={style.img}></div>
      </div>

      <Footer />
    </div>
  );
}

export default AuthPage;
