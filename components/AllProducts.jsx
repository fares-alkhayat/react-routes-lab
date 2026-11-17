import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router'

function AllProducts(){
    const [ products, setProducts ] = useState([])

    async function getAllProducts(){
        const response = await axios.get('https://products-api-164h.onrender.com/products')
        console.log(response.data)
        setProducts(response.data)
    }

    useEffect(()=>{
        getAllProducts()
    },[])

    return (
    <div>
        <h1>All Products</h1>
        {products.map((oneProduct)=>
        <div key={oneProduct._id}>
            <p>Title: {oneProduct.title}</p>
            <Link to={`/products/${oneProduct._id}`}>See Details</Link>
        </div>
        )}
    </div>
    )
}

export default AllProducts