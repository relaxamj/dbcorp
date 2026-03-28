const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// About route
app.get('/about', (req, res) => {
    res.send(`
        <h2>About Page</h2>
        <p>This app is running on GCP VM with Nginx 🚀</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
