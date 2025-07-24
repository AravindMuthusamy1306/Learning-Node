import express from 'express';

const app = express();
const port = 3000;

app.use((req, res, next) =>{
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1> <h2>Welcome to the Middleware Example</h2>');
});

app.listen(port, (req, res) => {
    console.log(`Server is running on http://localhost:${port}`);
});