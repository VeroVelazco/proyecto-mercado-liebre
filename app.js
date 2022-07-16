const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')));
app.listen(port , () => console.log("server running in http://localhost:"+ port));