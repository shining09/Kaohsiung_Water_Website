// 讀取waterpool_CTSIdata.json裡的資料，以更新系統上的水庫卡爾森資料
var express = require('express');
var router = express.Router();

// 查詢水庫卡爾森指數變化
router.post('/', (req, res) => {
    var params = req.body;
    var CTSIdata = []
    console.log(params.river)
    var data = require(`${global.URL}waterpool_CTSIdata.json`);
    data = data.forEach(item => {
        item.forEach(detail => {
            if (detail.item2.indexOf(params.river) !== -1) {
                CTSIdata.push(detail)
            }
        })
    })
    console.log(CTSIdata)
    res.send({
        CTSIdata
    })
});
module.exports = router;