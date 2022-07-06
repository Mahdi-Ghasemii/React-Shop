import Button from "../../UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import "./CartModal.css"

const cartsInfo = [];

const CartModal = () => {
    const totalAmount = 0;
    return (
        <div className="cart-modal">
            {
                cartsInfo.map(cart => {
                    return <CartItem {...cart} key={cart.id}></CartItem>
                })
            }
            <div>
                <h2>Total Amount</h2>
                <p>${totalAmount}</p>
            </div>
            <div className="modal-btns-container">
                <Button title="Close" className="btn-primary cancel-btn"></Button>
                <Button title="Order" className="btn-primary order-btn"></Button>
            </div>

        </div>

    );
}

export default CartModal;