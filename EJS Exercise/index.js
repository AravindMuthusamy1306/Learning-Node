import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    const second = new Date().getSeconds();
    const data = {
        title : 'EJS tags',
        seconds: second,
        item: ['Apple', 'Banana', 'Orange'],
        htmlContent: '<em>This is HTML content</em>'
    }
    res.render('index.ejs', data)
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
