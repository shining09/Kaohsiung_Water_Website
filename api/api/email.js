// 利用nodemailer處理信件自動寄送
var express = require('express')
var nodemailer = require("nodemailer");
var router = express.Router();

var bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.post('/', function (req, res) {
    var params = req.body;
    res.send({
        message: 'send!!'
    })

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465, // SMTP 埠
        secure: false,
        secureConnection: true, // 使用 SSL
        auth: {
            user: 'stukwater@gmail.com',
            pass: 'waterhunter'
        }
    });
    var mailOptions = {
        to: 'stukwater@gmail.com',
        from: 'stukwater@gmail.com', // 這裡的from和 上面的user 賬號一樣的
        subject: '高雄水整合平台使用者意見回報', // 標題
        // text和html兩者只支援一種
        // text: params.name + ' : ' + params.content, // 內文
        html: params.subject + '<br/>' + params.name + ' : ' + params.content + '<br/>訊息來自 : ' + params.email // html 內容
    };
    var mailOptions2 = {
        to: params.email,
        from: 'stukwater@gmail.com', // 這裡的from和 上面的user 賬號一樣的
        subject: '高雄水整合平台已收到您的回覆', // 標題
        // text和html兩者只支援一種
        // text: params.name + '您好! 感謝您寶貴的意見，我們會參考並進行改進', // 內文
        html: params.name + "您好! 高雄水整合平台已收到您寶貴的意見<br/>感謝您的回饋，我們會參考並進行改進<br/>也歡迎再到我們網頁進行更多的探索<a href='https://stukwater.github.io/Kaohsiung_City_Water_Resources_Integration_System/#/'>高雄市水整合平台</a>" // html 內容
    };
    // 先寄送給自己的信箱使用者輸入的訊息
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('郵件傳送: ' + info.response);
    });
    // 再寄送已收到回覆信件給使用者的信箱
    transporter.sendMail(mailOptions2, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('郵件傳送: ' + info.response);
        transporter.close();
    });
});
module.exports = router;