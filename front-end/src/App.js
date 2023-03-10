import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './layouts/Header/Header';


import './App.css';
import Home from './pages/Home';
import SideBar from './layouts/SideBar/Sidebar';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}
