// 到氣象資料開放平臺取得降雨資訊，以更新降雨的資訊
var express = require('express');
var router = express.Router();
var axios = require('axios');

// 查詢降雨資訊
router.post('/', (req, res) => {
    var url = "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/O-A0002-001?Authorization=CWB-F2A736D8-3A15-435E-8BED-D8993F84938C&format=JSON"
    var str = encodeURI(url);
    axios
        .get(
            str
        )
        .then(response => {
            let kaosiungData = response.data.cwbopendata.location.filter((obj) => {
                return obj.parameter[0].parameterValue === "高雄市";
            });
            let data = []
            kaosiungData.forEach((item) => {
                let newestTime = ''
                let date = item.time.obsTime.indexOf('T')
                let time = item.time.obsTime.indexOf('+')
                for (let i = 0; i < date; i++) {
                    newestTime += item.time.obsTime[i]
                }
                newestTime += '  '
                for (let j = time - date + 2; j < time; j++) {
                    newestTime += item.time.obsTime[j]
                }
                item.weatherElement.forEach(detail => {
                    if (parseFloat(detail.elementValue.value) < 0) detail.elementValue.value = '0.00'
                })
                let obj = {
                    updateTime: newestTime,
                    SiteName: item.locationName,
                    Township: item.parameter[2].parameterValue,
                    local: [item.lat, item.lon],
                    Rainfall10min: item.weatherElement[2].elementValue.value,
                    Rainfall1hr: item.weatherElement[1].elementValue.value,
                    Rainfall3hr: item.weatherElement[3].elementValue.value,
                    Rainfall6hr: item.weatherElement[4].elementValue.value,
                    Rainfall12hr: item.weatherElement[5].elementValue.value,
                    Rainfall24hr: item.weatherElement[6].elementValue.value,
                    NOW: item.weatherElement[7].elementValue.value,
                };
                data.push(obj)
            })
            console.log(data)
            res.send({
                data
            })
        })
        .catch((err) => {
            console.log(err);
        });
});
module.exports = router;