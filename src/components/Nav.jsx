import React, { useContext, useEffect, useState } from 'react'
import { FaShopify } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {food_items} from "../food"
import { dataContext } from '../context/usercontext';
const Nav = () => {
  const dispatch = useDispatch()
  const items = useSelector(state=>state)
  const [input,setinput] = useState("");
  const {cat,setcat} = useContext(dataContext)
  console.log(items)
  console.log(input)
  useEffect(() => {
  if (!input.trim()) {
    setcat(food_items);
    return;
  }

  const result = food_items.filter(item =>
    item.food_name.toLowerCase().includes(input.toLowerCase())
  );

  setcat(result);
}, [input]);
  return (
          <>
    <div className='w-full h-[50px] bg-[#000000c4] flex justify-evenly items-center'>
         <div className='flex'>
           <h1 className='text-white text-[30px]'>Shopy</h1>
<FaShopify className='text-[30px] text-white mt-3'/>
         </div>
         <div className='flex  w-[70%]'>
<input type="text" placeholder='Search food here' className='border bg-white rounded w-[80%]' onChange={(e)=>setinput(e.target.value)} value={input}/>
          <IoIosSearch className='text-white text-[32px] border p-[5px] rounded'/>
         </div>
         <Link to="/Cart">
         <div className='mb-[2px]'>
          <p className='text-white text-center text-[20px]'>{items.cart.length}</p>
          <IoCartOutline className='text-[30px] text-white'/>
         </div></Link>
    </div>
    <div className='flex justify-evenly items-center bg-gray-400 h-[25px] mb-4 flex-wrap'>
          <Link to="/"><p>Home</p></Link>
          <Link to="/Contact"><p>Contact</p></Link>
          <Link to="/Cart"><p>Cart</p></Link>
          
         </div>
</>
  )
}

export default Nav
