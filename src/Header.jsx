import React, { Component } from 'react'
import {GiWindsock} from 'react-icons/gi'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                   <h1>Blizzard</h1>
                </div>
                <div className="navBar">
                    <div className="menu">
                        <a>Nos Produits</a>
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
