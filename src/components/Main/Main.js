import { Fragment } from "react";
import background_img from "../../assets/meals.jpg"
import Introduct from "./Intro/Introduct";
import Menu from "./Menu/Menu";
import "../../styles/Main.css"
import Button from "../UI/Button/Button";




const Main = () => {

    return (
        <Fragment>
            <img className="main-image" src={background_img} alt="some delicious food"></img>
            <Introduct></Introduct>
            <Menu></Menu>
        </Fragment>
    );
}

export default Main;