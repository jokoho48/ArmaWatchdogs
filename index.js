const fs = require('fs');
const Utils = require("./Utils.js");
require("dotenv").config();

let date_today = new Date();
let date_yesterday = new Date();

date_yesterday.setDate(date_yesterday.getDate() - 1); // make it Yesterday!

let dir_today = Utils.getFolderName(date_today);
let dir_yesterday = Utils.getFolderName(date_yesterday);

if (!fs.existsSync(dir_today)) {
  fs.mkdirSync(dir_today);
}
if (!fs.existsSync(dir_yesterday)) {
  // return;
}
// Utils.compressImages("");
Utils.compareImages("Diff1.png", "Diff2.png", "Diff.png");