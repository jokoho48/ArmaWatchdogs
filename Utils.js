const fs = require('fs');
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");
const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

exports.getFolderName = function (date) {

    // current Second
    let sec = ("0" + date.getSeconds()).slice(-2);

    // current Minute
    let min = ("0" + date.getMinutes()).slice(-2);

    // current Hour
    let hour = ("0" + date.getHours()).slice(-2);

    // current day
    let day = ("0" + date.getDay()).slice(-2);
    let yesterday = ("0" + date.getDate()).slice(-2);

    // current month
    let month = ("0" + (date.getMonth() + 1)).slice(-2);

    // current year
    let year = date.getFullYear();
    let dir = `./${year}_${month}_${day}`;
    return dir;
};

exports.moveFile = async function (file, dir2) {
    //include the fs, path modules
    var fs = require('fs');
    var path = require('path');

    //gets file name and adds it to dir2
    var f = path.basename(file);
    var dest = path.resolve(dir2, f);

    return fs.rename(file, dest);
};

exports.compareImages = function (file1, file2, output) {
    const img1 = PNG.sync.read(fs.readFileSync(file1));
    const img2 = PNG.sync.read(fs.readFileSync(file2));

    const {
        width,
        height
    } = img1;
    const diff = new PNG({
        width,
        height
    });
    pixelmatch(img1.data, img2.data, diff.data, width, height, {
        threshold: process.env.DIFFTHRESHOLD,
        includeAA: false,
        aaColor: [255, 255, 255],
        diffMask: true,
        diffColor: [255, 0, 0]
    });
    fs.writeFileSync(output, PNG.sync.write(diff));
};

exports.compressImages = async function (file, outDir) {
    const files = await imagemin([file], {
        destination: outDir,
        plugins: [
            imageminPngquant() // TODO: make setting for Quality and general settings
        ]
    });

};