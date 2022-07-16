
import "../../../styles/CartItem.css"

const CartItem = (props) => {
    return (
        <section key={props.id} className="cart-item">
            <header className="cart-item-header">
                <h2>{props.name}</h2>
            </header>
            <div className="item-part-container">
                <p>{props.price}</p>
                <div className="plus-minuse-btns">
                    <button onClick={props.onRemove.bind(null , props.id)} className="btn-secondary">-</button>
                    <button onClick={props.onAdd.bind(null , props.id)} className="btn-secondary">+</button>
                </div>
            </div>
            <input type="text" className="num-ordered" disabled value={"x"+props.number}></input>
            <div className="item-endline"></div>
        </section>
    );
}

export default CartItem;
