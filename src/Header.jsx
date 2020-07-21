import React, { Component } from 'react'
import {GiWindsock} from 'react-icons/gi'
import { NavLink } from "react-router-dom";


export class Header extends Component {
    render() {
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
                    <GiWindsock/>
                        <a>Votre Panier</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
