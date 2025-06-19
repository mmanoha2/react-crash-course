const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();


const port = 3333;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/jobs', (req, res) => {
    const dataPath = path.join(__dirname, 'jobs.json');
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Error reading or parsing JSON"});
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});