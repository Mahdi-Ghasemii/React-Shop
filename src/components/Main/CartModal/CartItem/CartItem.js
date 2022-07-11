import Button from "../../../UI/Button/Button";
import "./CartItem.css"

const CartItem = (props) => {
    return (
        <section key={props.id} className="cart-item">
            <header className="cart-item-header">
                <h2>{props.name}</h2>
                <div>
                    <Button onClick={props.onRemove.bind(null , props.id)} title="-" className="btn-secondary"></Button>
                    <Button onClick={props.onAdd.bind(null , props.id)} title="+" className="btn-secondary"></Button>
                </div>
            </header>
            <div>
                <p>{props.price}</p>
                <input type="text" className="num-ordered" disabled value={"x"+props.number}></input>
            </div>
        </section>
    );
}

export default CartItem;