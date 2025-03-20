import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'

const RouterConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product-details/:id' element={<ProductDetails/>}></Route>
    </Routes>
  )
}

export default RouterConfig
