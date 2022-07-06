import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import { BackdDrop, CartModal } from "./components/Main/CartModal/CartModal";
import Main from "./components/Main/Main";

function App() {

  const [isModalShown , setIsModalShown]  = useState(false)

    const showCartModal =() => {
        setIsModalShown(true);
    }
    const hideCartModal =() => {
        setIsModalShown(false);
    }


  return (
    <>
      <Header onShowCartModal={showCartModal}></Header>
      <Main></Main>
      {isModalShown 
      && ReactDOM.createPortal(<CartModal onHideCartModal={hideCartModal}></CartModal> , document.getElementById("modal"))
      }
      {isModalShown 
      && ReactDOM.createPortal(<BackdDrop onHideCartModal={hideCartModal}></BackdDrop> , document.getElementById("modal"))
      }

      </>
  );
}

export default App;
