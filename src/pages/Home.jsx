import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ListPage } from '../container'
import Details from './Details'
import NotFound from './NotFound'

import { ProtectedRoute } from '../routes'

const Home = () => {  
  return (
    <>
      <Routes>

        <Route 
          element={
            <ProtectedRoute>
              <ListPage />
            </ProtectedRoute> 
          } 
          path="/browse" 
        />

        <Route 
          element={ 
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          } 
          path="/browse/:id" 
        />

        <Route 
          element={<NotFound />} 
          path="/*" 
        />

      </Routes>
    </>
  )
}

export default Home