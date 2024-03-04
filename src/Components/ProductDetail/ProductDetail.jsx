import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { Link, useParams } from 'react-router-dom'
import { getProductId } from '../../Apiservice/Api'



function ProductDetail() {
    const {id}= useParams();

    const [productdetail, setProductdetail] = useState({})

useEffect(() => {
 const fetchProductdetails= async()=>{
      const data = await getProductId(id)
      setProductdetail(data)
 }
 fetchProductdetails()
}, [id])


const Handlebuynow= ()=>{
    window.confirm('This product is out of stock')
}


  return (
    <div className='product-details-container'>

<img className='product-image' src={productdetail.image} alt="" />
<div className='product-info'>
<h2 className='product-title'>{productdetail.title}</h2>
<p className='product-description'> 
{productdetail.description}
</p>

<p className='product-price'>
{productdetail.price}0
</p>
<button className='buy-btn'onClick={Handlebuynow} >Buy Now</button>
<Link to='/'>
    <button className='back-btn'>Back to Home</button>    
</Link>
</div>
    </div>
  )
}

export default ProductDetail