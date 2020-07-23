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

    function giveImg(wind){
        return winds.filter(element => (element.name==wind))[0].image
    }




    useEffect(() => {
  if (currentCart){ 
      var winds =  currentCartWind(currentCart)
       var bill = winds.map(element => {
          var couple = {}
          couple.wind = element
          couple.image = giveImg(element)
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
            <table>
                            <thead>
                                    <tr>
                                        <th>Produit</th>
                                        <th>Photos</th>
                                        <th>Prix à l'unité</th>
                                        <th>Nb</th>
                                        <th>Total</th>
                                    </tr>
                            </thead>
                {currentCart ? cartBill.map(function(element){
                    return(
                            <tbody>
                                <tr>
                                    <td>{element.wind}</td>
                                    <td> 
                                        <img src={element.image}></img>
                                     </td>
                                    <td>{element.unitPrice}</td>
                                    <td>{element.occurence}</td>
                                    <td>{element.total}</td>
                                </tr>
                              
                            </tbody>   
                    )
                }) : 
                     <div>No products</div>
                }
                </table>
                <div>Total = {cartBill.reduce((acc, currentValue) => acc+currentValue.total, 0) }</div>
            </div>

        </div>
    )
}

export default Cart
