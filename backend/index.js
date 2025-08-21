const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const app = express();


app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
