const express = require('express');
const path = require('path');
const fs  = require('fs');
const noteData = require('_/db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded());

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './index.html')));

app.get('/api/notes', (req, res) => {
res.json(`${req.method} request to get note made`);
        console.info(`${req.method} request to get note`);
    });

app.post('/api/notes', (req, res) => {
        res.json(`${req.method} request received to add a note`);
        console.info(`${req.method} request received to add a note`);
    });

    app.listen(PORT, () => console.log('Listening on port ${PORT}'));