import React , {useContext, useState, useEffect} from 'react'
import UserCart from "./context/userCart"
import Header from './Header'

import winds from './Winds'

function Cart() {
    const {currentCart} = useContext(UserCart);
    const [cartBill, setCartBill] = useState([])
    console.log(currentCart)

    function currentCartWind(cart){
        var cartWind = []
        cart.map(element => {
            if (cartWind.indexOf(element.name)==-1){
                cartWind.push(element.name)
            }
        
        })
        return cartWind
    }


    function checkOccurence(wind, cart){
      return cart.filter(element => element.name==wind).length
            }

    function givePrice(wind){
        return winds.filter(element => (element.name==wind))[0].price
          
    }




    useEffect(() => {
  if (currentCart){ 
      var winds =  currentCartWind(currentCart)
       var bill = winds.map(element => {
          var couple = {}
          couple.wind = element
          couple.occurence = checkOccurence(element, currentCart)
          couple.unitPrice = givePrice(element)
          couple.total = couple.unitPrice*couple.occurence
         return  couple
          

       } )
       setCartBill(bill)

        
    }}, []);

        



    return (
        <div>
            <Header/>
            <div className="cart">
                {currentCart ? cartBill.map(function(element){
                    return(
                        <div>
                            <div>{element.wind}</div>
                            <div>{element.occurence}</div>
                            <div>{element.unitPrice}</div>
                            <div>{element.total}</div>
                        </div>
                    )
                }) : 
                     <div>No products</div>
                }
            </div>

        </div>
    )
}

export default Cart
