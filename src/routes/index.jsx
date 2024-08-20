import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './RoutesPath'

const NavigatorRoutes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default NavigatorRoutes