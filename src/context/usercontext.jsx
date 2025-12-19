import React from "react";
import { createContext, useState } from "react";
import { food_items } from "../food";
export const dataContext = createContext();
const UserContext=({children})=>{ 
   const [cat,setcat] = useState(food_items);        
        let data ={ 
   cat,
   setcat,
        }  
          return(
 <div>
       <dataContext.Provider value={data}>
       {children}  
          </dataContext.Provider>     
 </div>
          )
}
export default UserContext;