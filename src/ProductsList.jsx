import React, { useState , useContext} from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import WindContainer from './WindContainer';
import userCart from "./context/userCart";

import winds from './Winds'


export default function ProductsList(props) {
    console.log(props)
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(winds)
  const { currentCart, setCurrentCart } = useContext(userCart);


   const addCart = (e) => {
       if (currentCart==null){ 
        let newCart = [...cart]
        newCart.push(e)
        setCart(newCart)
        setCurrentCart(newCart)
       } else {
        let newCart = [...currentCart]
        newCart.push(e)
        setCart(newCart)
        setCurrentCart(newCart)

       }
    }



       
        return (
            <div className="productsList">
                {products ?  products.map((element) => {
                    return ( <WindContainer element={element}  action={addCart}/>
                       )}): "no product" }

            </div>
        )
    }


