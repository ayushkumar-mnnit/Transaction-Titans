import React from 'react'
import './About.css'
import Footer from './Footer'
import { Navigate, useNavigate } from 'react-router-dom'



const About = () => {
  const navigate=useNavigate();
  const swith=()=>{
    navigate('/login')
  }
  return (
    
    <div className="ag-format-container">
      <button className='button2' onClick={swith}>Move to Login Page</button>
  <div className="ag-courses_box">
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
          Complete Transaaction in different Currency
          
        </div>
        
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
       All kind of Bill managment Page 
       with proper notification
        </div>
      
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
            Chat page for all payment simplicity
        
        </div>
       
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
            for view issue we have proper dark and night mode 
        </div>
      
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
            Your payment chart graph and other information
        </div>
       
      </a>
    </div>
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg" />
        <div className="ag-courses-item_title">
         Payment managment page for your simplicity
        </div>
      </a>
    </div>
    <Footer/>
  
   
  </div>
</div>


   
  )
}

export default About