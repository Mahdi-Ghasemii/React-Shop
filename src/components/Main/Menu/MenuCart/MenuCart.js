import { useState , useContext } from "react";
import Button from "../../../UI/Button/Button";
import "./MenuCart.css"
import cartContext from "../../../../contexts/cart-context";

const MenuCart = (props) => {
    const id = `amount-${props.id}`;
    const [cartsInfo , setCartInfo] =  useContext(cartContext);
    const [amount , setAmount] = useState(1);

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const addBtnClickHandler = () => {
        console.log(amount)
        cartsInfo.addItem(props.name , props.price , amount);
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
                    <input type="number" onChange={amountChangeHandler} className="amount-input" id={id}  name={id} value={amount}></input>
                </div>
                <Button onClick={addBtnClickHandler} title="+ Add" className="btn-primary add-btn"></Button>
            </div>
        </section>
    );
}

export default MenuCart;