import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = 'https://influencerkaserver.onrender.com'

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);


    //Get all Notes
    const getNotes = async () => {
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
        });

        const json = await response.json();
        setNotes(json);

       }



    //Add a Note
    const addNote = async (username,name,inemail,phone) => {
        //TODO : API call
        //API call

        const response = await fetch(`${host}/api/notes/addnote`,{
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": localStorage.getItem('token')
                     },
            body: JSON.stringify({username,name,inemail,phone}), 
        });

       
        const note = await response.json();
        setNotes(notes.concat(note));
        getNotes(setNotes);
        

    }


    //Delete a Note
    const deleteNote = async(id) => {
        //API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            }
        });
 const json = await response.json();
 console.log(json);


        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);

    }


    //Edit a Note
    const editNote = async (id, username,name,inemail,phone) => {
        //API call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')            },
            body: JSON.stringify({username,name,inemail,phone})
        });
const json = await response.json();
console.log(json);
       


        let newNotes = JSON.parse(JSON.stringify(notes))
        //logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].username = username;
                newNotes[index].name = name;
                newNotes[index].inemail = inemail;
                newNotes[index].phone = phone;
                break;
            }
           
        }
        setNotes(newNotes);
    }


    return (

        <NoteContext.Provider value={{ notes,setNotes, addNote, deleteNote, editNote,getNotes }}>
            {props.children}
        </NoteContext.Provider>

    )
}



export default NoteState;