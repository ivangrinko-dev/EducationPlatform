import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";
import Pagination from '@mui/material/Pagination';

function StudentPage() {
  const array = [
    {
      img: "img1",
      header: "JavaScript",
      text: "JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.",
    },
    {
      img: "img2",
      header: "TypeScript",
      text: "TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules",
    },
    {
      img: "img3",
      header: "Python",
      text: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
    },
  ];

  const result = array.map((elem) => (
    <div className={style.wraper}>
      <div className={style[elem.img]}></div>
      <div className={style.info}>
        <h1 className={style.item}>{elem.header}</h1>
        <p className={style.text}>{elem.text}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <Header />
      <div className={style.header}>
        <div className={style.img}></div>
        <h1>Course</h1>
      </div>
      <div className={style.main}>{result}</div>
      <Pagination count={10}  className={style.pagination}/>
      <Footer />
    </div>
  );
}

export default StudentPage;
