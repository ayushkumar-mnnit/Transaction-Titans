
import React, { useContext,useState} from 'react';
import noteContext from '../Context/notes/NoteContext';
import "./Noteitem.css"



 // State to store the search input value
 


const Noteitem = (props) => {

  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
 

  return (
    <div className='gettable'>
    
   <div className="search-container">
      
    </div>
    <table className="table">
       
      <thead>
        <tr>
          <th>Expenses</th>
          <th>Prices</th>
          <th>Extra Note</th>
          <th>Information about bill</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
       
          
        </tr>
      </thead>
      <tbody>
     
        <tr>
          <td>{note.username}</td>
          <td>{note.phone}</td>
          <td>{note.name}</td>
          <td>{note.inemail}</td>
          <td>{note.date}</td>
          <td>
          
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            >
              Edit
            </i>
          </td>
          <td>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert('Deleted Successfully', 'success');
              }}
            >
              Delete
            </i>
          </td>
          <td>
        
</td>

        </tr>
        {/* You can add more rows here for each note */}
      </tbody>
    </table>
    </div>
  );
};

export default Noteitem;
