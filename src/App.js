import React from 'react';
import Header from './Header'
import Presentation from './Presentation'
import Advantage from './Advantage'
import Footer from './Footer'
import './index.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="home"> 
      <Presentation/>
      <Advantage/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
