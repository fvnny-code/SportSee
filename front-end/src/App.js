import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './layouts/Header/Header';


import './App.css';
import Home from './pages/Home';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}
