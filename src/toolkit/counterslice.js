import { createSlice } from "@reduxjs/toolkit";


const initialState={value:[]}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        getData:(state,action)=>{
            // state.value.push(JSON.parse(localStorage.getItem(action.payload)))
            // console.log(localStorage.getItem(action.payload))
            // console.log(action.payload)
            let a=localStorage.getItem(action.payload) !==null ? localStorage.getItem(action.payload):[]
            console.log(a,'opopopop')
            if (a.length===0){
                state.value.push([])
            }else{
                state.value.push(JSON.parse(a))
            }
            // localStorage.setItem('a',JSON.stringify(action.payload))
        }
    }
})

export const{getData}=counterSlice.actions;
export default counterSlice.reducer