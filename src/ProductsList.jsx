import React, { Component } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import WindContainer from './WindContainer';

export class ProductsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.products.winds,
            cart : []
        }

    }

    addCart= (wind) => {
        let newCart = [...this.state.cart]
        newCart.push(wind)
        this.setState({cart : newCart})
        
    }


    render() {
        console.log(this.props)
        console.log(this.addCart)
        return (
            <div className="productsList">
                {this.state.data ?  this.state.data.map((element) => {
                    return ( <WindContainer element={element} addCart={this.addCart}/>
                       )}): "no product" }

            </div>
        )
    }
}

export default ProductsList
