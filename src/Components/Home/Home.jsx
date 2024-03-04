import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProduct } from '../../Apiservice/Api'
import { Link } from 'react-router-dom'

function Home() {

//  to fetch data , define 2 state
 const [product, setProduct] = useState([])

 useEffect(() => {
   const fetchProducts= async()=>{
 const data= await getAllProduct();
setProduct(data)
   } 

 fetchProducts()
 }, [])
 
  return (
    <div className='product-grid'>
 
 {
    product.map((products)=>(
<div className='product'>
<img  className='product-img'
src={products.image}
alt=".." />
<h2>{products.title}</h2>
<p>
    <span className='price'> ${products.price}</span>
</p>


<Link to= {`/product/${products.id}`}>
    <button  className='product-btn'>Product details</button> 
</Link> 
  </div>
    ))
 }
   

    </div>
  )
}

export default Home