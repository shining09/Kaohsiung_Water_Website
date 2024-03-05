// 讀取environment_mainRiverRPI.json，以產生環境水體河川汙染RPI的下載資訊
var express = require('express');
var router = express.Router();

// 下載環境水體河川汙染RPI資訊
router.post('/', (req, res) => {
    var params = req.body;
    var responseData = []
    var data = require(`${global.URL}environment_mainRiverRPI.json`);
    data = data.forEach(item => {
        if (item[0].riverName.indexOf(params.river) !== -1) {
            responseData.push(...item)
        }
    })
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;