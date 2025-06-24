const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const port = 3333;
const dataPath = path.join(__dirname, 'jobs.json');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/jobs/:id', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        const job = data.jobs.find(job => job.id.toString() === req.params.id.toString());
        if (!job) {
            res.status(404).json({error: "Job not found"});
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({error: error});
    }
})

app.get('/jobs', (req, res) => {
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