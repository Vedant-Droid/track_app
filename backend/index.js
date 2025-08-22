const express = require('express');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  console.log("Root route hit");
  res.send('Hello from the API!LOLOL');
});
app.get('/test', (req, res) => {
  console.log("Test route hit");
  res.send("Test route response");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("server os up hoes");
});
