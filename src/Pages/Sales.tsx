import React, { FC ,useContext, useEffect, useState} from 'react'
import { Button, FormGroup, Box, Table, TableHead, TableBody, TableCell } from '@mui/material'
import _ from 'lodash'
import { productsType } from '../commonComponents/arrayTypes'
import ProductListContext from '../commonComponents/productListContext'

const Sales: FC = () => {
    const products: productsType[] = [{ name: "Cadbury", price: "Rs.5", buttonName: "Add to Cart",id:1 },{ name: "Milkybar", price: "Rs.10", buttonName: "Add to Cart",id:2 },{ name: "MangoBite", price: "Rs.2", buttonName: "Add to Cart",id:3 },{ name: "IceCream", price: "Rs.15", buttonName: "Add to Cart",id:4 },{ name: "Cakes", price: "Rs.25", buttonName: "Add to Cart" ,id:5 }]
    const listContext:any = useContext(ProductListContext)
    const [img, setImg] = useState<any>('')
    const addToCartHandler = (prod:any)=>{
        listContext?.addProductsHandler(prod)
    }
    useEffect(() => {
      setImg(localStorage.getItem('img'))
    }, [])
    return (
        <div style={{width:"500px", marginTop:"200px",textAlign:"center" }}>
          <img src={img} alt='ic'/> 
            <FormGroup>

                <Button>Add Sales</Button>
            </FormGroup>
            <Box >
                {/* <Table>
                    <TableHead>
                        <TableCell>
                            
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>1.</TableCell>
                    </TableBody>
                </Table> */}
                {_.map(products,table => <Table><TableHead>
                    <TableCell>{table?.name}</TableCell>
                    <TableCell>{table?.price}</TableCell>
                </TableHead>
                <TableBody>
                    <Button onClick={()=>addToCartHandler(table)}>
                    {table?.buttonName}
                    </Button>
                </TableBody>
                </Table>)}

            </Box>
        </div>
    )
}

export default Sales
