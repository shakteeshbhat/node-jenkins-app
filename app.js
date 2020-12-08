const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! of cloud computing and devops and computer '))

var server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;
