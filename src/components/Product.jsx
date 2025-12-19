import React from 'react'
import { useDispatch } from 'react-redux'
import { additem } from '../Redux/CartSlice'
const Product = ({name,price,image,id}) => {
  const dispatch = useDispatch()
  return (
    <div className='w-[300px] h-[350px] border flex flex-col justify-start items-center rounded-3xl mt-3 mb-2'>
          <img src={image} alt="" className='w-full h-[70%] object-fit rounded-3xl'/>
          <div className='flex flex-col w-full'>
                    <span className='font-bold text-center'>{name}</span>
                    <span className='font-bold text-center'> Price: {price} RS</span>
                    <button className='bg-[aqua] w-[80%] border mx-[10%] p-1 mt-2 rounded-3xl active:bg-white active:transition-all duration-300'onClick={()=>dispatch(additem({name:name,price:price,image:image,id:id,qty:1}))} >Add</button>
          </div>
    </div>
  )
}

export default Product