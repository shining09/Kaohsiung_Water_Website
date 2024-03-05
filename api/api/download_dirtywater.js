// 連結到資料庫，並透過對應SQL篩選出對應資料，以產生汙水紀錄的下載資訊
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

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
// 查詢汙水紀錄
router.post('/', (req, res) => {
    var sql = $sql.download_dirtywater.month;
    var sql2 = $sql.download_dirtywater.year;
    var params = req.body;
    console.log(params);
    if (params.year !== 'all') {
        // sql += " where year ='" + params.year + "'";
        conn.query(sql, params.year, function (err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                jsonWrite(res, result);
                console.log('success!!')
            }
        })
    }
    if (params.year === 'all') {
        // sql += " where year ='" + params.year + "'";
        conn.query(sql2, params.average, function (err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                jsonWrite(res, result);
                console.log('success!!')
            }
        })
    }
});
module.exports = router;