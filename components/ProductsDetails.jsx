import { useParams } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ProductDetails(){
    
    const [ product, setProducts ] = useState(null)

    const { productId } = useParams()
    console.log(productId)

    async function getProductDetails(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        setProducts(response.data)
    }


    useEffect(()=>{
        getProductDetails()
    },[])

  return (
    <div>
        <h1>Product Details</h1>
        {product ? <>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
        </>
        : null}
    </div>
  )
}

export default ProductDetails