const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'furniture'
});

app.listen(3000, () => {
    console.log('Server running successfully');
});


app.get('/api/furniture/get', (req, res) => {
    // let fur_name= "Chair"
  conn.query('SELECT * FROM furnituretable', function(error, rows, fields) {
        if(error) throw error;
        else{
            console.log(rows);
            res.send(rows);
            res.end();
        }
    })


})

app.get('/api/features/get', (req, res) => {
  conn.query('SELECT * FROM featuretable', function(error, rows, fields) {
        if(error) throw error;
        else{
            console.log(rows);
            res.send(rows);
            res.end();
        }
    })


})

