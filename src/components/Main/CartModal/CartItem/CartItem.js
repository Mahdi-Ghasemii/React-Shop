import Button from "../../../UI/Button/Button";
import "./CartItem.css"

const CartItem = (props) => {
    return (
        <section className="cart-item">
            <h2>{props.title}</h2>
            <div>
                <Button title="-" className="btn-secondary"></Button>
                <Button title="+" className="btn-secondary"></Button>
            </div>
            <div>
                <p>{props.price}</p>
                <input type="number" className="num-ordered" disabled>x {props.number}/</input>
            </div>
        </section>
    );
}

export default CartItem;