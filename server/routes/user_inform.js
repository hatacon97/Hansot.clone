const express = require('express');
const router = express.Router();
const db = require('../config/db')
const util = require('util');

router.get('/login', (req, res) =>{
    res.send({data: 'data'})
});

router.post('/onLogin', (req, res)=>{
    console.log(`= = = > req: ${util.inspect(req)}`)

    const  userId = req.query.userId
    const userPass = req.query.userPass

    const sql1 = 'SELECT COUNT(*) AS result FROM usertable WHERE userId = ?'
    db.query(sql1, userId, (err, data)=>{
        if(!err){
            if(data[0].result < 1) {
                res.send({'msg': '입력하신 아이디가 일치하지 않습니다.'})
            }else {
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM usertable WHERE userId = ? AND userPass = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT userId FROM usertable WHERE userId =? AND userPass = ?)
                                END AS userId
                                , CASE (SELECT COUNT(*) FROM usertable WHERE userId = ? AND userPass = ?)
                                WHEN '0' THEN NULL
                                ELSE (SELECT userPass FROM usertable WHERE userId =? AND userPass = ?)
                            END AS userPass`;
                const params = [userId, userPass, userId, userPass, userId, userPass, userId, userPass]
                db.query(sql2, params, (err, data)=>{
                    if(!err){
                        res.send(data[0])
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
});

module.exports = router;