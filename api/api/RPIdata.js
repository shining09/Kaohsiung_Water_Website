// 讀取environment_mainRiverRPI.json，以更新環境水體主要河川RPI汙染的資訊
var express = require('express');
var router = express.Router();

// 查詢環境水體主要河川RPI汙染資訊
router.post('/', (req, res) => {
    var params = req.body;
    var pollution = []
    var data = require(`${global.URL}environment_mainRiverRPI.json`);
    data.forEach(item => {
        if (item[0].riverName === params.river) {
            pollution.push(...item)
        }
    })
    console.log(pollution)
    res.send({
        pollution
    })
});
module.exports = router;