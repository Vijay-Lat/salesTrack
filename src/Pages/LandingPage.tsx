import React, { useContext, useState } from 'react'
import TopBar from '../commonComponents/TopBar'
import RuningImg from '../Assets/Running.png'
import { Route, Routes } from 'react-router-dom'
import Sales from './Sales';
import _, { Object } from 'lodash'
import Track from './Track';
import { Dialog, Modal } from '@mui/material';
import { Button, FormGroup, Box, Table, TableHead, TableBody, TableCell } from '@mui/material'
import { productsType } from '../commonComponents/arrayTypes';
import ProductListContext from '../commonComponents/productListContext';
import ReRender from './ReRender';
import { useSelector } from 'react-redux';

enum Title {
    title = 'Sales Track',
    color = "secondary"
}
interface tabType {
    id: number
    comp: any
    path: string
}
interface productListType {
    products: productsType[]
    addProductsHandler: (product: productsType) => void
}

const subTabs: tabType[] = [{ id: 0, comp: Sales, path: "/sales" }, { id: 1, comp: Track, path: "/track" }]
const LandingPage = () => {
    const [showCart, setShowCart] = useState<boolean>(false)
    // const [products, setProducts] = useState<productsType[]>([])
    const tabNames = ["Sales", "Track",]
    const toggleCartModal = () => setShowCart((showCart) => !showCart)
    const [render, setRender] = useState(false)
    const listContext: productListType = useContext(ProductListContext)

     const cartBox = useSelector((state:any) => state.changeCart) // state.name which was given in the store for this slice

const renderNam = ()=>{
    setRender(true)
}
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            {render && <ReRender render={render}/>}
            {showCart && <Dialog open={showCart} onClose={toggleCartModal}>
                {listContext?.products?.length > 0 ?
                    <>
                        {_.map(listContext?.products, (table, index: number) => <Table><TableHead>
                            <TableCell>{index+1}.</TableCell>
                            <TableCell>{table?.name}</TableCell>
                            <TableCell>{table?.price}</TableCell>
                        </TableHead>
                        </Table>)}
                    </> : <Box style={{ width: "100px", height: "100px" , textAlign:"center",paddingTop:"39%"}}>No Data</Box>}
            </Dialog>}
            {/* <Dialog open={}>

            </Dialog> */}
            <TopBar logo={RuningImg} title={Title.title} barColor={Title.color} tabsList={tabNames} buttonClick={toggleCartModal} buttonName='View Cart' />
            <Button style={{marginTop:"50vh"}} onClick={()=>{console.log(cartBox)}}>
Click
            </Button>
            <Routes>
                {_.map(subTabs, path => <Route path={path?.path} element={<path.comp />} />)}
            </Routes>
        </div>
    )
}

export default LandingPage
