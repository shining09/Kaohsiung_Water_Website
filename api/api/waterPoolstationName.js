// 讀取waterpool_station.json，以更新水庫監測站的資訊
var express = require('express');
var router = express.Router();

// 取得水庫監測站資訊
router.post('/', (req, res) => {
    var data = require(`${global.URL}waterpool_station.json`);
    console.log(data)
    data = data[0]
    res.send({
        data
    })
});
module.exports = router;