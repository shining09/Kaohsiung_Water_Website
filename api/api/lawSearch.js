// 連結到資料庫，並透過對應SQL篩選出對應資料，以更新法律資訊
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// 連線資料庫
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失敗'
        });
    } else {
        res.json(ret);
    }
};
// 查詢法律
router.post('/', (req, res) => {
    var params = req.body;
    var sql = 'select * from ' + params.lawName
    console.log(params);
    conn.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
            console.log('success!!')
        }
    })
});
module.exports = router;