import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to ="/">
            <img className = 'header__logo'src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            <div className="header__search">
                <input type="text" className="input__search"/>
                <SearchIcon  className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span   className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span   className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span   className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__option__basket">
                    <Link to = "/checkout">
                    <ShoppingCartIcon className="shopping__cart__icon"/>
                    <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
