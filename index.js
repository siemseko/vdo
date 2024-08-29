// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number
const port = 7100;

// Define a route handler for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
