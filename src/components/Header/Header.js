import CartButton from './CartButton/CartButton';
import '../../styles/Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1>React Meals</h1>
            <CartButton onShowCartModal={props.onShowCartModal}></CartButton>
        </header>
    );
}

export default Header;