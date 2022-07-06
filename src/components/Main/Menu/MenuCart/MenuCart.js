import { useState } from "react";
import Button from "../../../UI/Button/Button";
import "./MenuCart.css"

const MenuCart = (props) => {
    const id = `amount-${props.id}`
    const [amount , setAmount] = useState(1);

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    return (
        <section key={props.id} className="menu-cart">
            <div>
                <p className="menu-cart-title">{props.name}</p>
                <i>{props.details}</i>
                <p className="menu-cart-price">{props.price}</p>
            </div>
            <div>
                <div className="menu-cart-amount">
                    <label className="amount-label" htmlFor={id}>Amount</label>
                    <input onChange={amountChangeHandler} className="amount-input" id={id} type="text" name={id} value={amount}></input>
                </div>
                <Button title="+ Add" className="btn-primary add-btn"></Button>
            </div>
        </section>
    );
}

export default MenuCart;