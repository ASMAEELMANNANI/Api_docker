'use strict';

const express = require('express');

// Constants
const PORT = 4006;

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile( __dirname +'/info.html');
});


app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});

