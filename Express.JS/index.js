import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hi!!');
});
app.get('/about', (req,res) => {
    res.send('About Me: I am a Software Developer');
});
app.get('/contact', (req,res) =>{
    res.send('Hello! You can contact me at @aravindmuthusamy_');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});