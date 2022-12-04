import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes, routesType } from './routes'
import {ThemeProvider} from '@mui/material'
import Theme from "../src/StyleSheets/Theme"

const App: FC = () => {
  const routeMapper = (route: routesType) => <Route path={route?.path} element={<route.component />}  key={route?.id}/>
  return (
    <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <Routes>
        {routes?.length > 0 && routes.map(routeMapper)}
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
