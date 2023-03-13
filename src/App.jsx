import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Home, Welcome, SignUp, Actor, Director, Details, MyList, ShowsList } from './pages';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ProtectedRoute } from './routes';
export default function App() {
  

  return (
    <>
    <GoogleOAuthProvider clientId="1039516402443-ogvmjrurbgea3nj2sdsrlv0n18vnbtie.apps.googleusercontent.com">
      <Routes>
        <Route element={<Welcome />} path='/' />
        <Route element={<Actor />} path='/actor/:id' />
        <Route element={<Director />} path='/director/:id' />
        <Route element={<Details />} path='/browse/show/:id' />
        <Route element={<MyList />} path='/list/shows' />
        <Route element={<ShowsList />} path='/shows' />
        
        <Route element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        } path="/login" />

        <Route element={
          <ProtectedRoute>
            <SignUp />
          </ProtectedRoute>
        } path="/signup" />

        <Route element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } path="/*" />

      </Routes>
    </GoogleOAuthProvider>
      
    </>
  )
  
}

