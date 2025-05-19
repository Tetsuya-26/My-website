import React from 'react'
import Home from './pages/Home'
import { Route, createRoutesFromElements, RouterProvider,createBrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import RootLayouts from './layouts/RootLayouts'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayouts />}> 
        <Route index element={<Home />} /> // outlet
        <Route path="/shop" element={<Shop />} /> // outlet
        <Route path="/about" element={<About />} /> // outlet
        <Route path="/contact" element={<Contact />} /> // outlet
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App