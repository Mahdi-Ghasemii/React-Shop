import { useState , useContext } from "react";
import cartContext from "../../../../contexts/cart-context";
import '../../../../styles/MenuCart.css'
import "../../../../styles/Button.css";

const MenuCart = (props) => {
    console.log(props.id)
    const id = `amount-${props.id}`;
    const cartsInfo =  useContext(cartContext);
    const [amount , setAmount] = useState(1);

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const addBtnClickHandler = () => {
        console.log(amount , props.price)
        cartsInfo.addItem({ 
            "id" : props.id ,
            "name" : props.title ,
            "price" : +props.price ,
            "number" :+amount
        });
    }

    return (
        <section key={props.id} className="menu-cart">
            <div className="menu-cart-left">
                <p className="menu-cart-title">{props.title}</p>
                <i>{props.description}</i>
                <p className="menu-cart-price">$ {props.price}</p>
            </div>
            <div className="menu-cart-right">
                <div className="menu-cart-amount">
                    <div className="menu-cart-amount-part1">
                        <label className="amount-label" htmlFor={id}>Amount</label>
                        <input type="number" onChange={amountChangeHandler} className="amount-input" id={id}  name={id} value={amount}></input>
                    </div>
                    <button onClick={addBtnClickHandler} className="btn-primary add-btn">+Add</button>
                </div>
            </div>
        </section>
    );
}

export default MenuCart;