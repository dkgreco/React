const express = require('express'),
    port = 3000;

//Create Application
let app = express();

app.use(express.static('public'));

app.listen(port, () => console.log(`Express server is up on port: ${port}`));