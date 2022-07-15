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
            setIsLoading(false);
            // setJsonData(tempJsonData);
            // console.log(tempJsonData);
            return jsonData;
            
        } 
        catch (err) {
            console.log(err);
            setError(err);
        }
    
    }
    return (
        <section className="menu">
        {isLoading && <Loading></Loading>}
        {/* {error && <p>{error}</p>} */}
        {
            jsonData.map(menu => {
                return (
                <MenuCart
                    {...menu}>
                </MenuCart> 
                );       
            })
        }
        <button title="Fetch" className="close-btn btn-primary" onClick={fetchData}></button>

        </section>
    );
}

export default Menu;