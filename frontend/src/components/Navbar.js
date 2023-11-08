import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Navbar.css"




export const Navbar = () => {
  let location = useLocation();

  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

 
  return (
  <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
   {/* <img className="companyimg" src="https://scontent.flko7-3.fna.fbcdn.net/v/t39.30808-6/301776926_413804394180184_6443925508776570264_n.png?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=y4OqaAe3K-cAX_lfHSP&_nc_ht=scontent.flko7-3.fna&oh=00_AfAfrJwZ0-ZyMYgZr37zeKjY2XJDxu_D2nnIp-PbrlE7Ww&oe=64FE2100" alt="notfound"/> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className= {`nav-link ${location.pathname==='/' ? "active":""}`} aria-current="page" to="/"><h2>Home</h2></Link>
        </li> */}
        <li className="nav-item">
         
        </li>
        </ul>

      {!localStorage.getItem('token') ? <form className="d-flex">
       
        <Link className="button" to="/about" role= "button">About Us</Link>
      </form> : <button onClick={handleLogout} className= "btn btn-primary ">Logout</button>}
    </div>
  </div>
</nav>
  )
}
