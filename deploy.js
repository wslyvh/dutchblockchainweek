require("dotenv").config();
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/web/",
  remoteRoot: "/public_html/",
  include: ["*", "**/*"],
  exclude: [],
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy.on("uploading", function(data) {
  console.log(data.totalFilesCount); // total file count being transferred
  console.log(data.transferredFileCount); // number of files transferred
  console.log(data.filename); // partial path with filename being uploaded
});
ftpDeploy.on("uploaded", function(data) {
  console.log(data); // same data as uploading event
});
ftpDeploy.on("log", function(data) {
  console.log(data); // same data as uploading event
});
ftpDeploy.on("upload-error", function(data) {
  console.log(data.err); // data will also include filename, relativePath, and other goodies
});

ftpDeploy.deploy(config, function(err, res) {
  if (err) {
    console.log("Error deploying..");
    console.log(err);
    process.exit(1);
  } else {
    console.log("Finished deployment..");
    console.log(res);
    process.exit(0);
  }
});
