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
    
    useState(() => {
        fetchData();
    } , []);

    
    return (
        <>
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
            </section>
            {/* <button className="btn-primary fetch-btn" onClick={fetchData}>Fetch</button> */}
        </>
    );
}

export default Menu;