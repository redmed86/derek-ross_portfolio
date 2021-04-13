const express = require('express');
const app = express();

app.use(express.static('public'))

app.listen(7222);
console.log('Application is running on port 7222')