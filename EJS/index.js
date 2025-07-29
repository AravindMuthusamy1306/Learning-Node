import express from 'express';

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    const date = new Date();
    const weekDay = date.getDay();
    let data = {};
    let dayType = '';
    let advice = '';
    
    if (weekDay === 0 || weekDay === 6) {
        dayType = 'It is the weekend!', advice = 'Take some time to relax and enjoy!'
    }
    else{
        dayType = 'It is a weekday.', advice = 'Stay productive and focused!'
    }

    data = {dayType, advice};
    res.render('index.ejs', data);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});