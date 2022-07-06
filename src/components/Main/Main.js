import { Fragment } from "react";
import background_img from "../../assets/meals.jpg"
import Introduct from "./Intro/Introduct";
import Menu from "./Menu/Menu";
import "./Main.css"

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