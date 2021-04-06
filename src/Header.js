import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const history = useHistory();
    const [{ basket, user}, dispatch] = useStateValue();
    const handleAuthentification = () => {
        if (user){
            dispatch({
                type : "INITIALIZE_BASKET"
            })
            auth.signOut();
        }else{
            history.push('/login');
        }
    }
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
                    <div onClick={handleAuthentification} className="header__option">
                        <span   className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                <Link to ="/orders">
                    <div className="header__option">
                        <span   className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
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
