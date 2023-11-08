import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import "./Signup.css"

export const SignUp = (props) => {

    
   const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""});

   let navigate = useNavigate();
   const switchtologin=()=>(
    navigate('/Login')
   )


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;
        const response = await fetch("http://localhost:8080/api/auth/createuser",{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password})
    })
    const json = await response.json();
    console.log(json);
    if(json.success){
        //save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        navigate("/login");
        props.showAlert("Account Created Succesfully","success");
    }
    else{
        props.showAlert("Invalid Credentials","danger");
    }
}

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
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
      <h1 className="opacity">SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="NAME"
        name="name"
        id="name"
        onChange={onChange}
        value={credentials.name}
         />
        <input type="string" placeholder="EMAIL" 
        name="email"
        id="email"
        onChange={onChange}
        value={credentials.email}/>
         <input
         placeholder='password'
          type='password'
        name="password"
        id="password"
        onChange={onChange}
        value={credentials.password}
         />
          <input type="password" placeholder="confirm password"
        name="cpassword"
        id="cpassword"
        onChange={onChange}
        value={credentials.cpassword}
         />
        
       
        <button className="submit">SIGNUP</button>
        <h4 className='switch'>Already Register!</h4>
        <button className='submit' onClick={switchtologin}>LOGIN</button>
     
       
      </form>  
   
    </div>
    <div className="circle circle-two" />
    </div>
    <div className="theme-btn-container" />
</section>
   </>
  )
}

