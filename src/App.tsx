import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes, routesType } from './routes'

const App: FC = () => {
  const routeMapper = (route: routesType) => <Route path={route?.path} element={<route.component />} />
  return (
    <BrowserRouter>
      <Routes>
        {routes?.length > 0 && routes.map(routeMapper)}
      </Routes>
    </BrowserRouter>
  )
}

export default App
