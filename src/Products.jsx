import React, { Component } from 'react'
import Header from './Header'
import ProductsList from './ProductsList'
import winds from './Winds'


export class Products extends Component {

    constructor(props){
        super(props);
        this.state= []
    }

    componentWillMount(){
        this.setState({winds})
    }


    render() {
        return (
            <div>
              <Header/>
              <ProductsList products={this.state} />

                
            </div>
        )
    }
}

export default Products
