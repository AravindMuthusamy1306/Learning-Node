import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

let userAuthenticated = false;

app.use(bodyParser.urlencoded({ extended: true }));

function authenticateUser(req, res, next) {
    const password = req.body.secret;
  if (password === 'Suv@2oo4') {
    userAuthenticated = true;
    next();
  }
  else{
    res.status(401).send('<h1>Unauthorized: Incorrect password</h1>');
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/secret', authenticateUser, (req, res) => {
  res.sendFile(__dirname + '/public/secret.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});