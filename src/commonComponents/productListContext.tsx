import React, { createContext, FC, useState } from 'react'
import { productsType } from './arrayTypes'

const ProductListContext = createContext({})

export const ProductListContextProvider:FC<any> = ({ children}) => {
    const [products, setProducts] = useState<productsType[]>([])
    const addProductsHandler = (product: object) => {
        setProducts((pro: any) => [...pro, product])
    }
    const providerVal:any={ products, addProductsHandler}
    return <ProductListContext.Provider value={providerVal}>
        {children}
    </ProductListContext.Provider>
}

export default ProductListContext
