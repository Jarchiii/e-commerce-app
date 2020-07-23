import React , {useContext} from 'react'
import UserCart from "./context/userCart"
import Header from './Header'

import winds from './Winds'

function Cart() {
    const {currentCart} = useContext(UserCart);
    console.log(currentCart)

    function currentCartWind(cart){
        var cartWind = []
        cart.map(element => {
            if (cartWind(element.name)==-1){
                cartWind.push(element.name)
            }
        return cartWind
        })
    }


    function checkOccurence(wind, cart){
      return cart.filter(element => element.name==wind).length
            }

        



    return (
        <div>
            <Header/>
            <div className="cart">
                {currentCart ? currentCart.map(function(element){
                    return(
                        <div>
                            <div>{element.name}</div>
                            <div>{element.price}</div>
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
