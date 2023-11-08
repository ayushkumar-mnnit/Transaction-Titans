
import React, { useContext, useEffect, useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../Context/notes/NoteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import SearchBar from './Searchbar';
import Currency from './Currency';


const Notes = (props) => {
  const navigate = useNavigate();
  const context = useContext(noteContext)
  const { notes, getNotes, editNote } = context;
 

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate("/login");;
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null);  
  const refClose = useRef(null);  

  const [note,setNote] = useState({id:"",eusername:"", ename:"",einemail:"",ephone:""});
  const [searchInput, setSearchInput] = useState('');
 


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, eusername: currentNote.username, ename: currentNote.name , einemail : currentNote.inemail, ephone: currentNote.phone});
  }

  
  const handleClick =(e)=>{
    editNote(note.id,note.eusername,note.ename,note.einemail,note.ephone);
    refClose.current.click();
    props.showAlert("Updated Succesfully","success");

}

const onChange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}
const handleSearch = (searchTerm) => {
  setSearchInput(searchTerm);
};


const filteredNotes = notes.filter((note) =>
  note.username && note.username.toLowerCase().includes(searchInput.toLowerCase())
);



  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <SearchBar handleSearch={handleSearch} />
      
      
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Note
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Update Expenses</label>
                  <input type="text" className="form-control" id="eusername" name='eusername' aria-describedby="emailHelp" value={note.eusername} onChange={onChange} minLength={5} required  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Update Extra Note</label>
                  <input type="text" className="form-control" id="ename" name='ename' value={note.ename} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inemail" className="form-label"> Update Information about Bill</label>
                  <input type="text" className="form-control" id="einemail" name='einemail' value={note.einemail} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Update prices</label>
                  <input type="text" className="form-control" id="ephone" name='ephone' value={note.ephone} onChange={onChange} minLength={5} required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref = {refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.eusername.length<5 || note.ephone.length<2} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>


      <div className="row my-3">
        <h2 className='px-5 addnote'>Your Transaction are Here</h2>
        <div className="container mx-2 px-5">
        {notes.length===0 && 'No Notes to display'}
        </div>
        {filteredNotes.sort((a,b) => new Date(b.date) - new Date(a.date)).map((note,_id) => {
  return <Noteitem key={_id} updateNote={updateNote}  showAlert={props.showAlert} note={note} />
})}


      </div>

       
      
   
    </>
  )
}

export default Notes
