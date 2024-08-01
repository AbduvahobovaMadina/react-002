import React from "react";
import "./header.scss";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/logo.svg"


function Header(){
    return (
        <div>
            <div className="header">
                <div className="container">
                    <nav className="navbar">
                        <img src={logo} alt="" />
                        <ul className="navbar__collection">
                            <li className="navbar__item"><select name="Discovery" id="">
                                <option value="Discovery">Discovery</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="America">America</option>
                                <option value="Italiya">Italiya</option>
                                </select></li>
                                <li className="navbar__item">About</li>
                                <li className="navbar__item">Contact us</li>
                        </ul>
                        <div className="icon">
                        <CiUser className="user" />
                        <CiShoppingCart className="cart" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header