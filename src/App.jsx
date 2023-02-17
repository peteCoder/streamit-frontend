import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Home, Welcome, SignUp } from './pages';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {
  

  return (
    <>
    <GoogleOAuthProvider clientId="1039516402443-ogvmjrurbgea3nj2sdsrlv0n18vnbtie.apps.googleusercontent.com">
      <Routes>
        <Route element={<Welcome />} path='/' />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Home />} path="/*" />
      </Routes>
    </GoogleOAuthProvider>
      
    </>
  )
  
}

