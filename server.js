const express = require('express');
const app = express();
let port = process.env.PORT || 7222;

app.use(express.static('public'));

app.listen(port, '0.0.0.0');
console.log('Server is running on port ' + port);