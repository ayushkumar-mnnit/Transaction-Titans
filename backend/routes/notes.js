const express = require('express');
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require('../models/Influencer');
const { body, validationResult } = require('express-validator');


//Route1 : get all the notes using : GET "/api/notes/fetchallnotes"  login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//Route2 : add a new note using : POST "/api/notes/addnote"  login required
router.post('/addnote', fetchuser, [
    
    body('username', 'Enter a valid UserName').isLength({ min: 2 }),
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('inemail', 'Enter a valid email').isLength({ min: 2 }),
    body('phone', 'Enter valid phone number').isLength({ min: 3 }),


], async (req, res) => {

    try {
        const { username,name,inemail,phone } = req.body;
        //if there are error return bad request and errrors
        const errors =  validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            username,name,inemail,phone, user: req.user.id
        })

        const savedNote = await note.save()

        res.json({ savedNote });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

})

//Route3 : Update and existing note using : POST "/api/notes/updatenote"  login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { username,name,inemail,phone } = req.body;
    try {
        //create a new note object
        const newNote = {};
        if (username) { newNote.username = username };
        if (name) { newNote.name = name };
        if (inemail) { newNote.inemail = inemail };
        if (phone) { newNote.phone = phone };

        //find the note to be updated and update it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

})


//Route4 : Delete an existing note using : DELETE "/api/notes/deletenote"  login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //find the note to be deleted and delete it 
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        //allow deletion only user owns this Note
        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") }


        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router