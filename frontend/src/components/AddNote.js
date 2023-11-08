

import React, { useContext, useState } from 'react';
import noteContext from '../Context/notes/NoteContext';
import './AddNote.css';
import Currency from './Currency';


function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ username: '', name: '', inemail: '', phone: '',date:'' });
  
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.username, note.name, note.inemail, note.phone);
    setNote({ username: '', name: '', inemail: '', phone: '' });
   
    props.showAlert('Added Successfully', 'success');
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className='page'>
        <Currency/>
      
    <div className="container my-3">
      <h1>Write Your Transaction</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Expenses
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            value={note.username}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Prices
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            name="phone"
            value={note.phone}
            onChange={onChange}
            minLength={2}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Extra Note
            
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={note.name}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inemail" className="form-label">
            Information About Bill
          </label>
          <input
            type="text"
            className="form-control"
            id="inemail"
            name="inemail"
            value={note.inemail}
            onChange={onChange}
          />
        </div>
        
      
       

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
        

   get Transaction Information
        </button>
      </form>
     

      
    </div>
    
    </div>
  );
}
export default AddNote