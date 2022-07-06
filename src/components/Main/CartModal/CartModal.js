import Button from "../../UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import "./CartModal.css"

const cartsInfo = [
    {
        name: "Sushi",
        price : "$ 22.99",
        number : 1,
        id: 1
    },
    {
        name: "Sushi",
        price : "$ 22.99",
        number : 1,
        id: 1
    },
    {
        name: "Sushi",
        price : "$ 22.99",
        number : 1,
        id: 1
    }
]

const CartModal = () => {
    const totalAmount = 0;
    return (
        <div className="cart-modal">
            <div className="cart-items-container">
                {
                    cartsInfo.map(cart => {
                        return <CartItem {...cart} key={cart.id}></CartItem>
                    })
                }
            </div>
            <div className="cart-modal-total-amount">
                <p>Total Amount</p>
                <p>${totalAmount}</p>
            </div>
            <div className="modal-btns-container">
                <Button title="Close" className="btn-primary close-btn"></Button>
                <Button title="Order" className="btn-primary order-btn"></Button>
            </div>

        </div>

    );
}

const BackdDrop = () => {
    return (
        <div className="backdrop"></div>
    );
}
export { CartModal , BackdDrop };