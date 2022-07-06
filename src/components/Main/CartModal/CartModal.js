import { useContext } from "react";
import Button from "../../UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import "./CartModal.css";
import cartContext from "../../../contexts/cart-context";


const CartModal = (props) => {

    const [cartsInfo , setCartInfo] = useContext(cartContext);
    console.log(cartsInfo)
    const order = () => {
        console.log("Order ...")
    }

    const totalAmount = 0;
    return (
        <div className="cart-modal">
            <div className="cart-items-container">
                {
                    cartsInfo.items.map(cart => {
                        return <CartItem {...cart}></CartItem>
                    })
                }
            </div>
            <div className="cart-modal-total-amount">
                <p>Total Amount</p>
                <p>${totalAmount}</p>
            </div>
            <div className="modal-btns-container">
                <Button onClick={props.onHideCartModal} title="Close" className="btn-primary close-btn"></Button>
                <Button onClick={order} title="Order" className="btn-primary order-btn"></Button>
            </div>

        </div>

    );
}

const BackdDrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onHideCartModal}></div>
    );
}
export { CartModal , BackdDrop };