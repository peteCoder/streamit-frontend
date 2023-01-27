import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Home, Welcome, SignUp } from './pages';


export default function App() {
  

  return (
    <>
      <Routes>
        <Route element={<Welcome />} path='/' />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<Home />} path="/*" />
      </Routes>
    </>
  )
  
}

