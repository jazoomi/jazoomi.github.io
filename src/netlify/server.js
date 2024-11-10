const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const { resolve } = require('path');
const app = express();
const CSV_FILE = 'visitors.csv';

//make a helper function to find unique IP's
const checkVisitor = (ip) =>{
    return new Promise((resolve, reject) => {
        let found = false;
        fs.createReadStream(CSV_FILE)
        .pipe(csv())
        .on('data', (row) => {
            if (row.ip === ip) found = true;
        })
        .on('end', () => resolve(found))
        .on('error', reject);

    });
};
// "middleware" which means it runs on every request send here. this middleware just write to the cvs file
app.use(async (req,res,next) => {
    const ip = req.ip;

    if(!(await checkVisitor(ip))){
        const newVisitor = '${ip},${new Date().toISOString()}\n';
        fs.appendFile(CSV_FILE, newVisitor, (err) =>{
            if (err) console.error('Error writing to csv', err);
        });
    }

    next();

})
    //this app function sends back the response that they want, which is the number of rows in the cvs since it represents the number of unique visits
    app.get('http://localhost:3001/api/your-endpoint', (req, res) => {
        let count = 0;
        fs.createReadStream(CSV_FILE)
        .pipe(csv())
        .on('data', () => count++)
        .on('end', ()=> res.json({count}))
        .on('error', (err) => res.status(500).json({error: err.message}));
    });

    app.listen(3001, () => {
        console.log('Server running on http://localhost:3001');
    })