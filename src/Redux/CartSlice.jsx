import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
          name:"cart",
          initialState:[],
          reducers:{
                    additem:(state,action)=>{
              state.push(action.payload)
                    },
                    deleteitem:(state,action)=>{
                       return state.filter((item)=>(
                              item.id !== action.payload
                       ))
                    },
                    incrementqty:(state,action)=>{
                     let item = state.find(item=>item.id === action.payload)
                     if(item) item.qty += 1;
                    },
                    decrementqty:(state,action)=>{
                      let item =  state.find(item=>item.id === action.payload)
                      if(item){
                        if(item.qty == 1){
                              return;
                        }else{
                              item.qty -= 1;
                        }
                      }
                    }
          }
})
export const {additem,deleteitem,incrementqty,decrementqty} = CartSlice.actions
export default CartSlice.reducer