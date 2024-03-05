// 定義API的路徑 & 各API讀取檔案的路徑

// 定義各API的檔案路徑
const dirtywater = require('./api/dirtywater');
const dirtywaterData = require('./api/dirtywaterData');
const newestRiverData = require('./api/newestRiverData');
const riverName = require('./api/riverName');
const environmentstationName = require('./api/environmentstationName');
const waterPoolstationName = require('./api/waterPoolstationName');
const groundWaterStationName = require('./api/groundWaterStationName');
const RPIdata = require('./api/RPIdata');
const CTSIdata = require('./api/CTSIdata');
const waterData = require('./api/waterData');
const waterPooldetailSearch = require('./api/waterPooldetailSearch');
const newestGroundData = require('./api/newestGroundData');
const groundWaterdetailSearch = require('./api/groundWaterdetailSearch');
const lawSearch = require('./api/lawSearch');
const cleanwaterData = require('./api/cleanwaterData');
const cleanwaterStandard = require('./api/cleanwaterStandard');
const download_YearCTSI = require('./api/download_YearCTSI');
const download_detailSearch = require('./api/download_detailSearch');
const download_AllCTSI = require('./api/download_AllCTSI');
const download_waterPoolstationName = require('./api/download_waterPoolstationName');
const download_dirtywater = require('./api/download_dirtywater');
const download_newestRiverData = require('./api/download_newestRiverData');
const download_environmentstationName = require('./api/download_environmentstationName');
const download_AllRPIdata = require('./api/download_AllRPIdata');
const download_RPIdata = require('./api/download_RPIdata');
const download_groundWaterStationName = require('./api/download_groundWaterStationName');
const download_groundWaterAlldetailSearch = require('./api/download_groundWaterAlldetailSearch');
const download_groundWaterdetailSearch = require('./api/download_groundWaterdetailSearch');
const quickSearchAll = require('./api/quickSearchAll');
const quickSearchWater = require('./api/quickSearchWater');
const quickSearchCleanwater = require('./api/quickSearchCleanwater');
const quickSearchDirtywater = require('./api/quickSearchDirtywater');
const email = require('./api/email');
const getRainfall = require('./api/getRainfall');

// 定義各API讀取檔案的路徑
// localURL => 本機
// remoteURL => 樹莓派主機
const url = { localURL: '../../public/server/', remoteURL: '../../server/', distURL: '../../server/' }
global.URL = url.distURL;
// global.URL = url.remoteURL;

var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 設定後端API路由
app.use('/dirtywaterAPI', dirtywater);
app.use('/dirtywaterData', dirtywaterData);
app.use('/environmentAPI/newestRiverData', newestRiverData);
app.use('/environmentAPI/riverName', riverName);
app.use('/environmentAPI/stationName', environmentstationName);
app.use('/environmentAPI/RPIdata', RPIdata);
app.use('/waterPoolAPI/waterData', waterData);
app.use('/waterPoolAPI/CTSIdata', CTSIdata);
app.use('/waterPoolAPI/stationName', waterPoolstationName);
app.use('/waterPoolAPI/waterPooldetailSearch', waterPooldetailSearch);
app.use('/law/lawSearch', lawSearch);
app.use('/groundWater/stationName', groundWaterStationName);
app.use('/groundWater/newestGroundData', newestGroundData);
app.use('/groundWater/detailSearch', groundWaterdetailSearch);
app.use('/cleanWater/cleanwaterData', cleanwaterData);
app.use('/cleanWater/cleanwaterStandard', cleanwaterStandard);
app.use('/download/download_YearCTSI', download_YearCTSI);
app.use('/download/download_detailSearch', download_detailSearch);
app.use('/download/download_AllCTSI', download_AllCTSI);
app.use('/download/download_AllCTSI', download_AllCTSI);
app.use('/download/download_waterPoolstationName', download_waterPoolstationName);
app.use('/download/download_dirtywater', download_dirtywater);
app.use('/download/download_newestRiverData', download_newestRiverData);
app.use('/download/download_environmentstationName', download_environmentstationName);
app.use('/download/download_AllRPIdata', download_AllRPIdata);
app.use('/download/download_RPIdata', download_RPIdata);
app.use('/download/download_groundWaterStationName', download_groundWaterStationName);
app.use('/download/download_groundWaterAlldetailSearch', download_groundWaterAlldetailSearch);
app.use('/download/download_groundWaterdetailSearch', download_groundWaterdetailSearch);
app.use('/quickSearch/quickSearchAll', quickSearchAll);
app.use('/quickSearch/quickSearchWater', quickSearchWater);
app.use('/quickSearch/quickSearchCleanwater', quickSearchCleanwater);
app.use('/quickSearch/quickSearchDirtywater', quickSearchDirtywater);
app.use('/email', email);
app.use('/getRainfall', getRainfall);

// 監聽埠( 利用port 3000去監聽API的請求 )
app.listen(3000);
console.log('success listen at port:3000');
console.log('waiting');