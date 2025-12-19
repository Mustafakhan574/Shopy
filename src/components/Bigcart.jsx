import React, { useState } from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementqty, deleteitem, incrementqty } from '../Redux/CartSlice';
const Bigcart = ({name,price,image,id,qty}) => {
          const dispatch = useDispatch()
          let [incre,setincre] = useState();
          console.log(incre)
  return (
    <div className='flex justify-center items-center w-full '>
                    <div className="card-container 
                     h-[300px] w-[80%] border flex   justify-between rounded-3xl relative">
          <div className='flex flex-col'>
<img src={image} alt="" className='object-cover w-full h-full rounded-3xl'/>
          </div>
          <div className='flex flex-col justify-evenly items-center'>
            <span className='text-[30px] font-medium'>{name}</span>
            <span className='text-[30px] font-medium'>price: {price}</span>
          
          <div className="flex gap-1 border">
<button className="text-[30px] border p-1 w-[30px] active:bg-[aqua]" onClick={()=>dispatch(decrementqty(id))}>-</button>
<span className="text-[30px] border p-1 w-[60px] text-center">{qty}</span>
<button className="text-[30px] border p-1 w-[30px] active:bg-[aqua]" onClick={()=>dispatch(incrementqty(id))}>+</button>
          </div>
          </div>
          <div className=''>
                    <button onClick={()=>dispatch(deleteitem(id))}><MdOutlineDeleteForever className='text-5xl'/></button>
          </div>
          </div>
          </div>
  )
}

export default Bigcart