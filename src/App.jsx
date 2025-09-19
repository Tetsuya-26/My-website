import React from 'react'
import Home from './pages/Home'
import { Route, createRoutesFromElements, RouterProvider,createBrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import RootLayouts from './layouts/RootLayouts'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayouts />}> // outlets
        <Route index element={<Home />} /> 
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App