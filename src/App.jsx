import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

ffunction App() {
  return (
    <div>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
        >
          Home
        </NavLink>
        <NavLink 
          to="/movies" 
          className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
