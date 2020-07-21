import React, { Component } from 'react'
import Header from './Header'
import Presentation from './Presentation'
import Advantage from './Advantage'
import Footer from './Footer'

export class Home extends Component {

    constructor(props){
        super(props);
        this.state= this.props
    }
    
    
    render() {
        console.log(this.props)

        return (
            <div className="App">
                <Header action={this.state}/>
                <div className="home"> 
                <Presentation/>
                <Advantage/>
                <Footer/>
                </div>
                </div>
        )
    }
}

export default Home
