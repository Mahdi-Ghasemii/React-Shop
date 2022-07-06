import "./Main.css"
import background_img from "../../assets/meals.jpg"
import Introduct from "./Intro/Introduct";
import Menu from "./Menu/Menu";
import CartModal from "./CartModal/CartModal";


const Main = () => {
    return (
        <>
            <img className="main-image" src={background_img} alt="some delicious food"></img>
            <Introduct></Introduct>
            <Menu></Menu>
            <CartModal></CartModal>
        </>
    );
}

export default Main;