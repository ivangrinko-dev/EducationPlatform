import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Inputs from "../../components/Inputs/Inputs";
import style from "./style.module.css";
import axios from "axios";

function RegPage() {
  const [input, setInput] = useState({})
  const array = ["name", "surname", "email", "pwd"];


async function  show(){
 const result = await axios.post("http://localhost:3001/api/reg", input)
 console.log(result.data);
}

  return (
    <div>
      <Header />
      <div className={style.regpage}>
        <div className={style.info}>
          <h1>Sign Upp</h1>
          <Inputs array={array} setInput={setInput} input={input}/>
          <div className={style.btn} onClick={show}>Sign Upp</div>
        </div>
        <div className={style.img}></div>
      </div>
      <Footer />
    </div>
  );
}

export default RegPage;
