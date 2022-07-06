import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import { BackdDrop, CartModal } from "./components/Main/CartModal/CartModal";
import Main from "./components/Main/Main";
import cartContext from "./contexts/cart-context";

function App() {

  const [isModalShown , setIsModalShown]  = useState(false)
  const [cartItems , setCartItems] = useState(
    {
    "items": 
      [
        {
          name : "Sushi",
          price: 19.34,
          number : 4
        },
        {
          name : "Rice",
          price: 14.76,
          number : 1
        },
        {
          name : "Chicken",
          price: 18.9,
          number : 2
        }
      ],
    "addItem": function (name , price , number) {
      console.log(name , price , number);
      setCartItems(
        {
          ...cartItems ,
          "items" :[...this.items , {name , price , number}]
        })
    }
    })

    console.log(cartItems)

  
    const showCartModal =() => {
        setIsModalShown(true);
    }
    const hideCartModal =() => {
        setIsModalShown(false);
    }


  return (
    <cartContext.Provider value={[cartItems , setCartItems]}>
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
