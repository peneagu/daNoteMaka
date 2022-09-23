const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

require('./routers/api')(app);
require('./routers/html')(app);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});