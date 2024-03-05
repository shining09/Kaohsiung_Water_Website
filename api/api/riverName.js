// 讀取environment_AllriverName.json，以取得所有高雄的環境水體流域資訊
var express = require('express');
var router = express.Router();

// 取得兩單位所有高雄的環境水體流域名稱
router.get('/', async (req, res) => {
    var river = require(`${global.URL}environment_AllriverName.json`);
    console.log(river)
    river = river[0]
    res.send({
        river
    })
});
module.exports = router;