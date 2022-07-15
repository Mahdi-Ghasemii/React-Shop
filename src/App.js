import { useState , useReducer } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import { BackdDrop, CartModal } from "./components/Main/CartModal/CartModal";
import Main from "./components/Main/Main";
import cartContext from "./contexts/cart-context";

const cartItemsChangeHandler = (state, action) => {

  
  switch (action.type) {
    case "ADD": {
      const newItem = action.item;
      console.log(state , action)
      
      const itemIndex = state.items.findIndex(item => item.id === newItem.id);
      if (itemIndex !== -1) { // check if item is already in state
        const newCartItems = {...state};
        const newNumber = state.items[itemIndex].number + newItem.number;
        const newPrice = state.items[itemIndex].price + (newItem.price * newItem.number);
        const updatedItem = {
          ...state.items[itemIndex],
          "number": newNumber,
          "price": newPrice
        }
        newCartItems.items[itemIndex] = updatedItem;
        console.log("if : ", state);
        return newCartItems;
      }
      else { // check if item is already in state
        return {
          ...state,
          items: [
            ...state.items,
            {
              "number" : newItem.number,
              "price" : newItem.price ,
              "name" : newItem.name ,
              "id" : newItem.id
            }
          ]
        }
      }
    }
    case "REMOVE": {
      const itemIndex = state.items.findIndex(item => item.id === action.id);
      const newItem = state.items[itemIndex];
      if (newItem.number === 1) {
        const updateCartItems = state.items.filter(item => item.id !== action.id)
        return {
          ...state,
          "items": updateCartItems
        }
      }
      else {
        const newCartItems = {...state};
        const newNumber = newItem.number - 1;
        const newPrice = newItem.price - (newItem.price / newItem.number);
        const updatedItems = {
          ...state.items[itemIndex],
          "number": newNumber,
          "price": newPrice
        }
        newCartItems.items[itemIndex] = updatedItems;
        return newCartItems;
      }
    }
      default: console.log("Wrong action type")
        break;
    }
}


function App() {

  const [isModalShown , setIsModalShown] = useState(false);
  
  const addItemToCartsHandler = (item) => {
    dispatch({item: item , type: 'ADD'});
  }
  const removeItemFromCartsHandler = (id) => {
    dispatch({id: id , type: 'REMOVE'});
  }
  
  
  const [cartItems , dispatch]  = useReducer(cartItemsChangeHandler ,
     { 
      "items" : [] , 
      "addItem" : addItemToCartsHandler ,
      "removeItem" : removeItemFromCartsHandler 
     }
  );

  
    const showCartModal =() => {
        setIsModalShown(true);
    }
    const hideCartModal =() => {
        setIsModalShown(false);
    }

  console.log("cartItems" ,cartItems)

  return (
    <cartContext.Provider value={cartItems}>
      <Header onShowCartModal={showCartModal}></Header>
      <Main></Main>
      {isModalShown 
        && ReactDOM.createPortal(<CartModal onHideCartModal={hideCartModal}></CartModal> , document.getElementById("modal"))
      }
      {isModalShown 
        && ReactDOM.createPortal(<BackdDrop onHideCartModal={hideCartModal}></BackdDrop> , document.getElementById("modal"))
      }
      </cartContext.Provider>
  );
}

export default App;
