import React from 'react'
import products from '../data/products.json'
import { useHistory } from "react-router-dom";


function Products() {
    const history = useHistory();

    const changeNavingation = (id) =>{
        console.log('sss')
        history.push('/view/'+id);
    }
    return (
        <div className="grid">
        {products.map((product,index)=>{
                return (
                
               <img   onClick={()=>{changeNavingation(product.id)}} src={product.image} alt={product.title} className="productimage"/> 
                                       
                )
                
            })}
                       
        </div>
    )
}

export default Products
