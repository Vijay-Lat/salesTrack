import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes, routesType } from './routes'
import {ThemeProvider} from '@mui/material'
import Theme from "../src/StyleSheets/Theme"
import {ProductListContextProvider} from './commonComponents/productListContext'

const App: FC = () => {
  const routeMapper = (route: routesType) => <Route path={route?.path} element={<route.component />}  key={route?.id}/>
  return (
    <ProductListContextProvider>
    <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <Routes>
        {routes?.length > 0 && routes.map(routeMapper)}
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </ProductListContextProvider>
  )
}

export default App
