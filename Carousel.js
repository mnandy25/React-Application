import React,{useState, useEffect} from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'


const Carousel= ({slides})=> {
    const[current,setCurrent]=useState(0)
    const length=slides.length;
    useEffect(()=>{
        console.log('slides:', slides)
    })

    const nextSlide=()=>{
        setCurrent(current === length-1 ? 0 : current+1 )
    }
    console.log(current)
    
    const prevSlide=()=>{
        setCurrent(current=== 0 ? length-1 : current-1 )
    }
    if(!Array.isArray(slides) || slides.length<=0){
        return null;
       }
    return (
                    <section className="slider">
                 <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
                 <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                 {slides.map((slide,index)=>{
                 return(
                   <div className={index === current  ? 'slide active':'slide'} key={index}>
                       {index === current && (
                       <img src={slide.image} alt="kids t-shirt" className='image' width="30%" height="30%"/>
                       )} 
                     </div>
                     );
                     })}
                     

            </section>
                   
          )
}

export default Carousel
