import { useState } from "react";
import MenuCart from "./MenuCart/MenuCart";
import "../../../styles/Menu.css"
import Button from "../../UI/Button/Button";
import Loading from "./Loading";

const Menu = (props) => {
    
    const [jsonData , setJsonData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState("");

    const fetchData = async() => {
        try {
            setIsLoading(true);
            const fetchedData = await fetch("https://fakestoreapi.com/products");
            const tempJsonData = await fetchedData.json();
            setJsonData(tempJsonData);
            console.log(jsonData);
            return jsonData;
            
        } 
        catch (error) {
            console.log(error);
            setError(error);
        }
    
    }
    return (
        <section className="menu">
        {isLoading && <Loading></Loading>}
        {error && <p>{error}</p>}
        {
            jsonData.map(menu => {
                return (
                <MenuCart
                    {...menu}>
                </MenuCart> 
                );       
            })
        }
        <Button title="Fetch" className="close-btn btn-primary" onClick={fetchData}></Button>

        </section>
    );
}

export default Menu;