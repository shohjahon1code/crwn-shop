import React, { useEffect } from 'react'

const Cart = () => {

  useEffect(()=> {
    fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))
  },[])

  return (
    <div>
    </div>
  )
}

export default Cart
