const fs = require('fs');
const path = require('path');

let uniqid = require('uniqid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {        
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    app.post('/api/notes', (req, res) => {
        console.log('set up new note');
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);

        let newNote = {
            text: req.body.text,
            title: req.body.title,  
            note_id: uniqid()
        };
        db.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.send(db);
    });

    app.get('/api/notes/:id', (req, res) => {
        if (req.param.note_id) {
          const noteId = req.params.note_id;
          for(let i = 0; i < notes.length; i++) {
              const currentNotes = notes[i];   
              if (currentNotes.note_id === noteId) {
                  res.json(currentNotes);
                  return;
              }
          }    
        }
    });
 
    app.delete('/api/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSync('db/db.json'));
        let deleteNotes = db.filter(item => item.id !== req.params.note_id);
        fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
        res.json(deleteNotes);      
    });
}