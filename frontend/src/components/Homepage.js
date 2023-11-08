import React, { useState } from 'react';
import './Homepage.css'; // Import the CSS file
import { Navigate, useNavigate } from 'react-router-dom';
import AddNote from './AddNote';
const Homepage = () => {
    const navigate=useNavigate()
    const switchtoaddnote=()=>{
        navigate('/')

    }
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <button className="drawer-toggle" onClick={toggleDrawer}>
        {isDrawerOpen ? 'Close Drawer' : 'View Full Website'}
      </button>
      <div className={`sidenav ${isDrawerOpen ? 'open' : ''}`}>
        <button className="close-toggle" onClick={closeDrawer}>
          Close
        </button>
        <a href="" onClick={switchtoaddnote}>AddNote</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <button className="dropdown-btn">
          Dropdown
          <i className="fa fa-caret-down" />
        </button>
        <div className="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <a href="#contact">Search</a>
      </div>
    </div>
  );
};

export default Homepage;


