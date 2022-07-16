import { useState } from "react";
import MenuCart from "./MenuCart/MenuCart";
import "../../../styles/Menu.css"
import Loading from "./Loading";
import '../../../styles/Button.css';

const Menu = (props) => {
    
    const [jsonData , setJsonData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState("");

    const fetchData = async() => {
        try {
            setIsLoading(true);
            const fetchedData = await fetch("https://fakestoreapi.com/products");
            setJsonData(await fetchedData.json());
            
        } 
        catch (err) {
            console.log("errori ke dade ..." ,err);
            setError(err);
        }
        setIsLoading(false);
    }

    console.log("message ",error.message)
    return (
        <section className="menu">
        {isLoading && <Loading></Loading>}
        {error && <p className="error">{error.message}</p>}
        {!isLoading && !error &&
            jsonData.map(menu => {
                return (
                <MenuCart
                    {...menu}>
                </MenuCart> 
                );       
            })
        }
        <button className="fetch-btn btn-primary" onClick={fetchData}>Fetch</button>

        </section>
    );
}

export default Menu;