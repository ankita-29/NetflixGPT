import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice(
    {
        name:'User',
        initialState:null,
        reducers:{
            addUser: (state,action)=>{
                return action.payload
            },
            removeUser:()=>{
                return null
            },
        }
    }
)

export default userslice.reducer;
export const {addUser,removeUser}=userslice.actions;