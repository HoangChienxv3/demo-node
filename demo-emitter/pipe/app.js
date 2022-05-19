var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/readme.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024
});

var writeable = fs.createWriteStream(__dirname + "/read2copy.txt");
var compressed = fs.createWriteStream(__dirname + "/readme.txt.gz");

var gzip = zlib.createGzip();

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);