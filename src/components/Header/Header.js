import CartButton from './CartButton/CartButton';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <h1>React Meals</h1>
            <CartButton></CartButton>
        </header>
    );
}

export default Header;