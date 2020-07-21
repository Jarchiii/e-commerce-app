import React , {useContext} from 'react'
import UserCart from "./context/userCart"
import Header from './Header'


function Cart() {
    const {currentCart} = useContext(UserCart);

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
