import Button from "../../../UI/Button/Button";
import "./MenuCart.css"

const MenuCart = (props) => {
    const id = `amount-${props.id}`
    console.log(id)
    return (
        <section className="menu-cart">
            <div>
                <p className="menu-cart-title">{props.name}</p>
                <i>{props.details}</i>
                <p className="menu-cart-price">{props.price}</p>
            </div>
            <div>
                <div className="menu-cart-amount">
                    <label className="amount-label" htmlFor={id}>Amount</label>
                    <input className="amount-input" id={id} type="number" name={id} value={props["amount-value"]}></input>
                </div>
                <Button title="+ Add" className="btn-primary add-btn"></Button>
            </div>
        </section>
    );
}

export default MenuCart;