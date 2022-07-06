import "./Main.css"
import background_img from "../../assets/meals.jpg"
import Introduct from "./Intro/Introduct";
import Menu from "./Menu/Menu";
import {BackdDrop, CartModal} from "./CartModal/CartModal";
import ReactDOM from "react-dom";

const Main = () => {


    return (
        <>
            <img className="main-image" src={background_img} alt="some delicious food"></img>
            <Introduct></Introduct>
            <Menu></Menu>
            
            {ReactDOM.createPortal(<CartModal></CartModal> , document.getElementById("modal"))}
            {ReactDOM.createPortal(<BackdDrop></BackdDrop> , document.getElementById("modal"))}
            </>
    );
}

export default Main;