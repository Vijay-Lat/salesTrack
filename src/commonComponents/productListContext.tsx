import React, { createContext, FC, useState } from 'react'
import { productsType } from './arrayTypes'

interface productListType {
    products: productsType[]
    addProductsHandler: (product: productsType) => void
}

interface childrenPropType {
    children: JSX.Element
}

const initialProductList: productListType = {
    products: [],
    addProductsHandler: () => { }
}

const ProductListContext = createContext(initialProductList)

export const ProductListContextProvider: FC<childrenPropType> = ({ children }) => {
    const [products, setProducts] = useState<productsType[]>([])
    const addProductsHandler = (product: productsType) => {
        setProducts((pro) => [...pro, product])
    }
    const providerVal: productListType = { products, addProductsHandler }
    return <ProductListContext.Provider value={providerVal}>
        {children}
    </ProductListContext.Provider>
}

export default ProductListContext
