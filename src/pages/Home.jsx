import React, { useState } from 'react'
import Nav from '../components/Nav'
import Slider from '../components/Slider'
import Categories from '../category'
import Product from '../components/Product'
import { food_items } from '../food'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { dataContext } from '../context/usercontext'

const Home = () => {
          const { cat, setcat } = useContext(dataContext);

          const filterproducts=(category)=>{
                    if(category === "All"){
                              setcat(food_items)
                              return
                    }
        let updatedata = food_items.filter((item)=>(item.food_category===category))
        setcat(updatedata)
          }
  return (
    <>
    <Slider/>
    <div className='w-full h-full flex flex-wrap p-5 border-b-2 bg-gray-300 gap-4 justify-between'>
     {Categories.map((category)=>{ 
          return (<div className=' cursor-pointer flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-transparent
          transition-all duration-300
          hover:border-red-500 hover:shadow-md
          active:bg-[aqua] flex-wrap'onClick={()=>filterproducts(category.name)}>
                    <span className="text-3xl">{category.image}</span>
                    <span>{category.name}</span>
                    </div>)
     })}
    </div>
    <div className='w-full h-full flex flex-wrap justify-evenly mt-4'>
          {cat.map((item)=>(
                    <Product name={item.food_name} price={item.price} image={item.food_image} id={item.id}/>
          ))}
    </div>
    
    </>
  )
}

export default Home