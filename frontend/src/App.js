import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import NoteState from './Context/notes/NotesState';
import Alert from './Alert';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { useState } from 'react';


import SearchBar from './components/Searchbar';
import About from './components/About';
import Homepage from './components/Homepage';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2500);
  }
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert} />
    <div className="container">
    <Routes>
     
      <Route element={<Home showAlert={showAlert} />} exact path='/' ></Route>
      <Route element={<Login showAlert={showAlert} />} exact path='/login' ></Route>
      <Route element={<SignUp showAlert={showAlert} />} exact path='/signup' ></Route>   
      <Route element={<Homepage showAlert={showAlert} />} exact path='/home' ></Route>   
   
      <Route element={<SearchBar/>} exact path='/searchbar' ></Route>
      <Route element={<About/>} exact path='/about' ></Route>
     
     




      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
