import React, {useState,useEffect} from 'react'
import MOCK from '../data/products.json';
import Slider from './Slider';
import single from '../data/single.json'
import Alicecarousel from './Alicecarousel';
import Carousel from './Carousel';


const View = (props) => {
    const currentProduct = MOCK.find((e)=> {return e.id == props.match.params.id})   
    
    return (
        <div >
            <div  className="view"><img  src={currentProduct.image} alt='t-shirt image' width="10%" height="10%" /></div> <br/><br/>
           
            <div className="title">
            {currentProduct.title}
            </div>    <br/>                     

        <div className="descrip">
        {currentProduct.description}
        </div>     
        <Carousel slides={currentProduct.productList} />
        </div>
    )
}

export default View
