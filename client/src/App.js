import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import RegPage from "./pages/RegPage/RegPage";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
   <Routes>
    <Route path="/" element = {<HomePage/>}></Route>
    <Route path="/auth" element = {<AuthPage/>}></Route>
    <Route path="/reg" element = {<RegPage/>}></Route>
   </Routes>
  );
}

export default App;
