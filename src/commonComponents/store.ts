import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import ItemSlice from './ItemSlice'

const store = configureStore({
    reducer:{
        changeCart:ItemSlice.reducer
    }
})

export default store
