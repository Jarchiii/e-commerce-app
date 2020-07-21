import React, { Component, useContext } from 'react'
import {GiWindsock} from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import UserCart from "./context/userCart"



function Header(){

    const {currentCart} = useContext(UserCart);

        return (
            <div className="header">
                <div className="title">
                   <NavLink exact className="link" to="/">
                   <h1>Blizzard</h1>
                   </NavLink>
                </div>
                <div className="navBar">
                    <div className="menu">
                        <NavLink exact className="link" to="/products">
                             Nos Produits
                        </NavLink>
                        <a>A propos</a>
                    </div>
                    <div className="panier">
                    <NavLink exact className="link" to="/cart">
                    <GiWindsock/>
                        
                        <a>{currentCart ? currentCart.length : ""}</a>
                        <a>Votre Panier</a>
                    </NavLink>
                    </div>
                </div>
            </div>
        )
    }


export default Header
