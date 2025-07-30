import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { fname: '', lname: '' });
});

app.post('/submit', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    res.render('index', { fname, lname });
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});