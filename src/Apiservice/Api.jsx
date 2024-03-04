import axios from "axios";

const BASE_URL ='https://fakestoreapi.com'  

// fetciing all products
export const getAllProduct = async()=>{

const  response = await axios.get(`${BASE_URL}/products`)
return response.data ;
}

// fetching the particular products using id 
export const getProductId = async(id)=>{

 const  response = await axios.get(`${BASE_URL}/products/${id}`)
return response.data ;
 }

    // fetching the  product  image using  id 
export const getProductImage = async(id)=>{

  const  response = await axios.get(`${BASE_URL}/products/${id}/image`)
 return response.data ;
  }