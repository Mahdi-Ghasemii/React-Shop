import MenuCart from "./MenuCart/MenuCart";
import "./Menu.css"

const menu_info = [
    {
        name: "Sushi",
        details: "Finest fish and veggist",
        price : 22.99,
        number: 0,
        id: 1
    },
    {
        name: "Rice",
        details: "Finest fish and veggist",
        price : 34.78,
        number: 0,
        id: 2
    },
    {
        name: "Chicken",
        details: "Finest fish and veggist",
        price : 87.45,
        number: 0,
        id: 3
    },
    {
        name: "Fish",
        details: "Finest fish and veggist",
        price : 21.32,
        number: 0,
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