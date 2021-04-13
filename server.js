const express = require('express');
const app = express();
let port = 7222;

app.use(express.static('public'))

app.listen(7222);
console.log('Server is running on port ' + port);