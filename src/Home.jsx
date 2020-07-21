import React, { Component } from 'react'
import Header from './Header'
import Presentation from './Presentation'
import Advantage from './Advantage'
import Footer from './Footer'

export class Home extends Component {

 
    
    
    render() {

        return (
            <div className="App">
                <Header />
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
