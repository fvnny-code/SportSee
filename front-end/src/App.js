import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header/Header";
import SideBar from "./layouts/SideBar/Sidebar";
import User from "./pages/User";
import { UserProvider } from "./utils/context";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Header />
          <SideBar />
          <Routes>
            <Route path="/" element={<User />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}
