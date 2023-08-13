import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from "./style.module.css"
function RegPage () {
    return(
        <div>
            <Header/>
            <div className={style.regpage}>
                <div className={style.info}>
                    <h1>Sign Upp</h1>
                    <div> <input type="text" placeholder="name" /></div>
                    <div> <input type="text" placeholder="surname" /></div>
                    <div > <input type="text" placeholder="email" /></div>
                    <div> <input type="text" placeholder="pwd" /></div>
                    <div className={style.btn}>Sign Upp</div>
                </div>
                <div className={style.img}></div>
            </div>
            <Footer/>
        </div>
    )
}

export default RegPage