import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const ItemSlice = createSlice({
    name:"changeCart",
    initialState:["Helo"],
    reducers:{
        addCart(state,action){
              return [...state,action.payload]
        }
    }

    
})

export default ItemSlice
