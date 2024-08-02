import React from "react";
import "./header.scss";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/logo.svg"

                                
const links =["Discovery", "About","Contact us"]


function Header(){
    let item = {
        color: "gray",
    }
    return (
        <div>
            <div className="header">
                <div className="container">
                    <nav className="navbar">
                        <img src={logo} alt="" />
                        <ul className="navbar__collection">
                                {
                                    links?.map((el)=>{
                                        return <li style={item} className="navbar__item">{el}</li>
                                        
                                    })
                                }
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