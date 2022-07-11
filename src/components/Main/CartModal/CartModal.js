import { useContext , useState , useEffect} from "react";
import Button from "../../UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import "./CartModal.css";
import cartContext from "../../../contexts/cart-context";


const CartModal = (props) => {
    
    const [isCartEmpty , setIsCartEmpty] = useState(true);
    const cartsInfo = useContext(cartContext);
    let totalAmount = cartsInfo.items.reduce((total,item) => 
    total + (item.number * item.price), 0);
    totalAmount.toFixed(2);
    
    console.log("isCartEmpty" ,isCartEmpty)
    const addItemHandler = (id) => {
        const itemIndex = cartsInfo.items.findIndex(item => item.id === id);
        const newPrice = cartsInfo.items[itemIndex].price / cartsInfo.items[itemIndex].number;
        cartsInfo.addItem({...cartsInfo.items[itemIndex] , "number" : 1 , "price" : newPrice});
    } 
    const removeItemHandler = (id) => {
        cartsInfo.removeItem(id);
    }
    const order = () => {
        console.log("Order ...")
    }

    useEffect(() => {
        if(!cartsInfo.items.length && !isCartEmpty){
            setIsCartEmpty(true);
        }
        else if (cartsInfo.items.length && isCartEmpty){
            setIsCartEmpty(false);
        }
    },[cartsInfo.items.length])

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
            <div className="modal-btns-container">
                <Button onClick={props.onHideCartModal} title="Close" className="btn-primary close-btn"></Button>
                <Button onClick={order} title="Order" className="btn-primary order-btn" disabled={isCartEmpty}></Button>
            </div>

        </div>

    );
}

const BackdDrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onHideCartModal}></div>
    );
}
export { CartModal , BackdDrop };