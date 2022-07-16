import { useContext , useState , useEffect} from "react";
import CartItem from "./CartItem";
import '../../../styles/CartModal.css';
import cartContext from "../../../contexts/cart-context";
import "../../../styles/Button.css";
import Checkout from "./Checkout";


const CartModal = (props) => {
    
    const [isCartEmpty , setIsCartEmpty] = useState(false);
    const [isCheckingOut , setIsCheckingOut] = useState(false);

    const cartsInfo = useContext(cartContext);
    let totalAmount = cartsInfo.items.reduce((total,item) => 
    total + (item.number * item.price), 0);
    totalAmount = totalAmount.toFixed(2);
    
    const addItemHandler = (id) => {
        const itemIndex = cartsInfo.items.findIndex(item => item.id === id);
        const newPrice = cartsInfo.items[itemIndex].price / cartsInfo.items[itemIndex].number;
        cartsInfo.addItem({...cartsInfo.items[itemIndex] , "number" : 1 , "price" : newPrice});
    } 
    const removeItemHandler = (id) => {
        cartsInfo.removeItem(id);
    }
    const order = () => {
        setIsCheckingOut(true);
    }

    useEffect(() => {
        if(cartsInfo.items.length){
            setIsCartEmpty(false);
        }
        else {
            setIsCartEmpty(true);
        }
    },[Boolean(cartsInfo.items.length)])

    return (
        <div className="cart-modal">
            <div className="cart-items-container">
                {
                    cartsInfo.items.map(cart => {
                        return <CartItem {...cart} onAdd={addItemHandler} onRemove={removeItemHandler}></CartItem>
                    })
                }
            </div>
            <div className="cart-modal-total-amount">
                <p>Total Amount</p>
                <p>${totalAmount}</p>
            </div>
            {isCheckingOut && <Checkout onCancel={setIsCheckingOut}/>}
            {!isCheckingOut && 
            <div className="modal-btns-container">
                <button onClick={props.onHideCartModal} className="btn-primary close-btn">Close</button>
                <button onClick={order} className="btn-primary order-btn" disabled={isCartEmpty}>Order</button>
            </div>}
        </div>

    );
}

const BackdDrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onHideCartModal}></div>
    );
}
export { CartModal , BackdDrop };