// 根據使用者要下載卡爾森紀錄的水庫名稱，讀取對應檔案
// 阿公店水庫 => waterpool_detailSearch.json
// 其他 => waterpool_CTSIdata.json
var express = require('express');
var router = express.Router();

// 下載水庫卡爾森紀錄
router.post('/', (req, res) => {
    var params = req.body;
    var responseData = []
    // 阿公店水庫要自己算平均，所以另外處理
    if (params.river === '阿公店水庫') {
        var data2 = require(`${global.URL}waterpool_detailSearch.json`);
        data2 = data2.forEach(item => {
            if (item[1].name.indexOf(params.river) !== -1) {
                let keyitem = JSON.parse(JSON.stringify(item))
                let sum = 0;
                let avg = 0;
                for (let i = 1; i < keyitem.length; i++) {
                    sum += parseFloat(keyitem[i].value);
                    avg = (sum / 3).toFixed(2);
                }
                let year = keyitem[0] - 1911 + "年";
                let obj = {
                    "item1": year, "item2": '阿公店', "value1": avg
                }
                responseData.push(obj)
            }
        })
        console.log(responseData)
        res.send({
            responseData
        })
        return
    }
    var data = require(`${global.URL}waterpool_CTSIdata.json`);
    data = data.forEach(item => {
        if (item[0].item2.indexOf(params.river) !== -1) {
            responseData.push(...item)
        }
    })
    console.log(responseData)
    res.send({
        responseData
    })
});
module.exports = router;