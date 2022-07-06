import Button from "../../../UI/Button/Button";
import "./CartItem.css"

const CartItem = (props) => {
    return (
        <section key={props.id} className="cart-item">
            <header className="cart-item-header">
                <h2>{props.name}</h2>
                <div>
                    <Button title="-" className="btn-secondary"></Button>
                    <Button title="+" className="btn-secondary"></Button>
                </div>
            </header>
            <div>
                <p>{props.price}</p>
                <input type="number" className="num-ordered" disabled value={"x"+props.number}></input>
            </div>
        </section>
    );
}

export default CartItem;