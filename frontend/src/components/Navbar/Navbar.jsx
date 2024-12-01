import React, { useState, useContext } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")

    }

    return (
        <div className="navbar">
            <Link to="/">
                <img
                    src="https://4.imimg.com/data4/HY/FF/MY-7045368/restaurant-management-software-500x500.png"
                    alt="logo"
                    className="logo"
                />
            </Link>
            <ul className="navbar-menu">
                <Link
                    to="/"
                    onClick={() => setMenu("Home")}
                    className={menu === "Home" ? "active" : ""}
                >
                    Home
                </Link>
                <Link
                    to="/menu"
                    onClick={() => setMenu("Menu")}
                    className={menu === "Menu" ? "active" : ""}
                >
                    Menu
                </Link>
                <Link
                    to="/about"
                    onClick={() => setMenu("About us")}
                    className={menu === "About us" ? "active" : ""}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    onClick={() => setMenu("Contact us")}
                    className={menu === "Contact us" ? "active" : ""}
                >
                    Contact us
                </Link>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="cart icon" />
                    </Link>
                    <div className={getTotalCartAmount() !== 0 ? "dot" : ""}></div>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li>
                                <img src={assets.bag_icon} alt="" />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logout}>
                                <img src={assets.logout_icon} alt="" />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
