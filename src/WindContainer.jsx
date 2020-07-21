import React, { Component } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

export class WindContainer extends Component {
    constructor(props){
        super(props)
    }


    render() {
       var  {element} = this.props
       var {action} = this.props
        return (
            <div className="windContainer">
            <img  className="imgWind" src={element.image}></img>
          <div className="infos">
                <h3>{element.name}</h3> 
                <h5>Prix : {element.price} €</h5>
                <div className="basketbtn">
                    <button onClick={(e)=>action(element)}>
                    <IoIosAddCircleOutline />
                     <a className="add">Ajouter {element.name } au panier</a>
                    </button>
                </div>
                <a className="seeMore">En voir plus</a>
          </div>

        </div>
        )
    }
}

export default WindContainer
