import express from 'express';

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/about-my-team.html');
});

// Member 1: route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/about-member1.html');
})
// Member 2: route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/about-member2.html');
})

app.listen(3000, function() {
    console.log('Server is running on port https://localhost:3000')
});

