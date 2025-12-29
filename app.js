// https://viblo.asia/p/nodejs-bai-12-static-file-tap-tin-tinh-trong-nodejs-1VgZvPO25Aw
// Đường dẫn trên giải thích về express.static()
// https://www.w3schools.com/nodejs/nodejs_path.asp
// Đường dẫn trên giải thích về path
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'; 

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const staticDir = join(__dirname, 'publics');
app.use(express.static(staticDir));

// Main route

app.get('/', (req, res) => {
  res.redirect('/about-my-team.html');
});

// Secondary route
app.get('/about-my-team.html', function(req, res) {
    res.sendFile(__dirname + '/views/about-my-team.html');
});

// Member 1: route
app.get('/about-member1.html', function(req, res) {
    res.sendFile(__dirname + '/views/about-member1.html');
})

// Member 2: route
app.get('/about-member2.html', function(req, res) {
    res.sendFile(__dirname + '/views/about-member2.html');
})

app.listen(3000, function() {
    console.log('Server is running on port http://localhost:3000')
});

