import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Inputs from "../../components/Inputs/Inputs";
import style from "./style.module.css";
import axios from "axios";

function AuthPage() {
  const array = ["email", "pwd"];
  const [input, setInput] = useState({})

  async function  authUser(){
    const result = await axios.post("http://localhost:3001/api/auth", input)
    console.log(result.data);
   }

  return (
    <div>
      <Header />

      <div className={style.authpage}>
        <div className={style.info}>
          <h1>Login</h1>
          <Inputs array = {array} setInput={setInput} input={input}/>
          <div className={style.btn} onClick={authUser}>Login</div>
        </div>
        <div className={style.img}></div>
      </div>

      <Footer />
    </div>
  );
}

export default AuthPage;
