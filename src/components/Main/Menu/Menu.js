import MenuCart from "./MenuCart/MenuCart";
import "./Menu.css"
import CartModal from "../CartModal/CartModal";

const menu_info = [
    {
        name: "Sushi",
        details: "Finest fish and veggist",
        price : "$ 22.99",
        "amount-value": 1,
        id: 1
    },
    {
        name: "Sushi",
        details: "Finest fish and veggist",
        price : "$ 22.99",
        "amount-value": 2,
        id: 2
    },
    {
        name: "Sushi",
        details: "Finest fish and veggist",
        price : "$ 22.99",
        "amount-value": 89432,
        id: 3
    },
    {
        name: "Sushi",
        details: "Finest fish and veggist",
        price : "$ 22.99",
        "amount-value": 1212,
        id: 4
    },
]

console.log(...(menu_info))
const Menu = (props) => {

    return (
        <section className="menu">
        {
            menu_info.map(menu => {
                return (
                <MenuCart
                    {...menu}>
                </MenuCart> 
                );       
            })
        }
        </section>
    );
}

export default Menu;