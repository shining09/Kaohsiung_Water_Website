// 定義SQL
var sqlMap = {
    // 汙水處理廠
    dirtywater: {
        month: 'select * from dirtywater where year=? and average=0 ',
        year: 'select * from dirtywater where average=1 '
    },
    // 汙水處理廠
    download_dirtywater: {
        month: 'select year,public,special,building,total,date from dirtywater where year=? and average=0 ',
        year: 'select year,public,special,building,total from dirtywater where average=1 '
    },
}
module.exports = sqlMap;