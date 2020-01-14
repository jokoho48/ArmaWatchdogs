const fs = require('fs');
const Utils = require("./Utils.js");
const glob = require("glob")
const {
  spawn
} = require('child_process');


require("dotenv").config();

let date_today = new Date();
let date_yesterday = new Date();

date_yesterday.setDate(date_yesterday.getDate() - 1); // make it Yesterday!

let dir_today = Utils.getFolderName(date_today);
let dir_yesterday = Utils.getFolderName(date_yesterday);

let parameters = process.env.ARMA_STARTUP_PARAMETERS.split(';');
parameters.push("-autotest=" + process.env.ARMA_AUTOTESTCONFIG);

const arma = spawn(process.env.ARMA_PATH, parameters);

arma.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

arma.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

arma.on('close', (code) => {
  console.log(
    `child process exited with code ${code}`
  );
  // TODO: Logic for Comparing all Items and Moving them
  if (!fs.existsSync(dir_today)) {
    fs.mkdirSync(dir_today);
  }

  if (!fs.existsSync(dir_today + "/diff")) {
    fs.mkdirSync(dir_today + "/diff");
  }

  if (!fs.existsSync(dir_yesterday)) {
    return;
  }
  Utils.compressImages(
    process.env.SCREENSHOT_PATH + "/*.png",
    dir_today
  ).then();

  glob(`${dir_today}/*.png`, null, function (
    er,
    files
  ) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    files.forEach(file => {
      Utils.compareImages(
        file,
        file.replace(dir_today, dir_yesterday),
        file.replace(dir_today, dir_today + "/diff")
      );
    });
  });
});