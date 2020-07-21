import React, { Component } from 'react'

export class ProductsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.products.winds
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="productsList">
                {this.state.data ?  this.state.data.map(function(element){
                    return (
                        <div className="windContainer">
                            <img  className="imgWind" src={element.image}></img>
                           <h3>{element.name}</h3> 
                           <h5>Prix : {element.price} €</h5>

                        </div>)}): "no product" }

            </div>
        )
    }
}

export default ProductsList
