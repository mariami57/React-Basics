import { NavLink, useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';
import SearchIcon from '../assets/images/icons/search-icon.png';
import CartIcon from '../assets/images/icons/cart-icon.png';
import CheckmarkWhite from '../assets/images/icons/checkmark-white.png';
import './Header.css';


export function Header({ cart }) {
    const navigate = useNavigate();
    
    const [searchParams] = useSearchParams();

    let totalQuantity = 0;

    const searchText = searchParams.get('search');

    const [search, setSearch] = useState(searchText || ''); 

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity
    })

    const updateSearchInput = (event) => {
        setSearch(event.target.value)
    }

    const findSearch = () => {
        navigate(`/?search=${search}`)
    }
    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                          src={CheckmarkWhite} />
                    <img className="mobile-logo"
                          src={CheckmarkWhite} /> 
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" 
                 value={search} onChange={updateSearchInput}/>

                <button className="search-button" onClick={findSearch}>
                    <img className="search-icon" src={SearchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={CartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    );
}