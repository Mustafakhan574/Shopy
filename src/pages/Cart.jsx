import React from 'react'
import Bigcart from '../components/Bigcart';
import { useSelector } from 'react-redux';

const Cart = () =>{
          let items = useSelector(state=>state)
         let Total =  items.cart.reduce((pre,cur)=>{
                return pre + cur.price*cur.qty ; 
         },0)
         console.log(items)
          let deliveryfees = 30;
          let final = Math.floor(Total + deliveryfees);
  return (
        <div className=''>
          {items.cart.length<=0? <p className='text-[40px] ml-[40%]'>Empty Cart</p>:
          <div className='flex gap-4 flex-col w-full'>
                    {items.cart.map((item)=>(
                              <Bigcart name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
                    ))}
                    </div>}
                    {items.cart.length>0?<div className='flex justify-center mt-4'>
        <div className='flex flex-col justify-between items-center border w-fit p-7 rounded-3xl'>
          <h1 className='text-5xl'>Invoice</h1>
          <br className='text-black'/>
        <span className='text-3xl'>Total products : {items.cart.length}</span>
        <span className='text-3xl'>Total price : {Total}</span>
        <span className='text-3xl'>Delivery fee : {deliveryfees}</span>
        <span className='text-3xl'>Final Total Amount : {final}</span>
           </div>
           </div>:""}
                    
        </div>  
  )
}

export default Cart
