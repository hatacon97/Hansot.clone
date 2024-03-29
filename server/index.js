const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const mysql = require('mysql');
const user_inform = require('./routes/user_inform')
const db = require('./config/db')

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'hansot'
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user_inform', user_inform);

app.get('/api/get', (req, res)=>{
    const  sqlSelect = "SELECT * FROM hansot_menu ORDER BY menu_code;"
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    })
});

app.get('/api2/get', (req, res)=>{
    const  sqlSelect = "SELECT * FROM hansot_menu WHERE menu_code = 1;"
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    })
});

app.get('/api3/get', (req, res)=>{
    const  sqlSelect = "SELECT * FROM hansot_menu WHERE menu_code = 2;"
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    })
});

app.get('/api4/get', (req, res)=>{
    const  sqlSelect = "SELECT * FROM hansot_menu WHERE menu_code = 3;"
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    })
});


app.get('/read/:id', (req, res)=>{
    const id = req.params.id;
    const  sqlSelect = "SELECT * FROM hansot_menu WHERE id = ?;"
    db.query(sqlSelect, id, (err, result) =>{
        res.send(result)
    })
});


app.post('/api/insert',(req, res)=>{

    const userId = req.body.userId
    const userPass = req.body.userPass
    const userName = req.body.userName

    const  sqlInsert = "INSERT INTO usertable (userId, userPass, userName) values (?,?,?)"
    db.query(sqlInsert, [userId, userPass, userName], (err, result)=>{
        console.log(result);
    })
});
const port = 3001;
app.listen(port, ()=>{
    console.log(`running on port ${port}`);
});