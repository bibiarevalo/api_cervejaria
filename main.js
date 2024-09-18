const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router.js'); 

app.use(bodyParser.json());

app.use('/cervejaria', router);

app.listen(8080, () => console.log('server rodando'));

module.exports = app 
