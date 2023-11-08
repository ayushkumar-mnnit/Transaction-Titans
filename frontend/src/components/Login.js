import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Footer from './Footer';


export const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const navigateToSignup = () => {
        navigate('/signup'); // Replace '/signup' with the actual path to your signup page
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json();
        console.log(json);

        // Save the auth token and redirect
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/home");
            props.showAlert("Login Successfully", "success");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
          <section className="container">
  <div className="login-container">
    <div className="circle circle-one" />
    <div className="form-container">
      <img
        src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
        alt="illustration"
        className="illustration"
      />
      <h1 className="opacity">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="USERNAME"
        name="email"
        id="email"
        onChange={onChange}
        value={credentials.email}
         />
        <input type="password" placeholder="PASSWORD" 
        name="password"
        id="password"
        onChange={onChange}
        value={credentials.password}/>
        <button className="submit">LOGIN</button>
        <h4 className='switch'>Not Registered!</h4>
     
        <button onClick={navigateToSignup} className="submit">
       Register
      </button>
      </form>  
   

    </div>
    <div className="circle circle-two" />
  </div>
  <div className="theme-btn-container" />
</section>
</>
    
   

    )
}

