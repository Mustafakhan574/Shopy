import React, { useState } from 'react'
import Categories from '../category'
import { food_items } from '../food'
import Product from '../components/Product'

const Shop = () => {
          const [cate,setcate] = useState(food_items)
                    const filterproducts=(category)=>{
                              if(category === "All"){
                                        setcate(food_items)
                                        return
                              }
                  let updatedata = food_items.filter((item)=>(item.food_category===category))
                  setcate(updatedata)
                    }
  return (
    <div>
          <div className='w-full h-full flex  p-5 border-b-2 bg-[aqua]'>
     {Categories.map((category)=>{ 
          return (<div className='w-full h-full cursor-pointer flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-transparent
          transition-all duration-300
          hover:border-red-500 hover:shadow-md
          active:bg-[aqua]'onClick={()=>filterproducts(category.name)}>
                    <span className="text-3xl">{category.image}</span>
                    <span>{category.name}</span>
                    </div>)
     })}
    </div>
    <div className='w-full h-full flex flex-wrap justify-evenly mt-4'>
          {cate.map((item)=>(
                    <Product name={item.food_name} price={item.price} image={item.food_image} id={id}/>
          ))}
    </div>
    </div>
  )
}

export default Shop