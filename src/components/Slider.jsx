import React, { useState } from 'react'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const Slider = () => {
          const [counter , setcounter] = useState(1);
          let images=[
                    image1,
                    image2,
                    image3,
                    image4
          ]
          const prevSlide = () => {
    setcounter(counter === 0 ? images.length - 1 : counter - 1);
  };

  const nextSlide = () => {
    setcounter(counter === images.length - 1 ? 0 : counter + 1);
  };
          
  return (
    <div className='w-full h-[300px] relative rounded-3xl'>
  <img src={images[counter]} alt="" className='w-[100%] h-[100%] rounded-3xl'/>
  <button className='absolute top-[50%] border bg-[white] p-2'><FaArrowLeftLong onClick={prevSlide}/></button>
  <button className='absolute right-0 top-[50%] border bg-[white] p-2' onClick={nextSlide}><FaArrowRightLong /></button>
    </div>
  )
}

export default Slider