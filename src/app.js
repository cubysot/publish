// src/app.js
const express = require('express');
const app = express();

// Endpoint local para /helloworld
app.get('/api/helloworld', (req, res) => {
  res.status(200).send('ok helloworld');
});

// Puerto de desarrollo local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
