var bar = require("./bar.js");
var msg = "���";
var info = "�Ǻ�";

function showInfo(){
    console.log(info);
}

exports.msg = msg;
exports.info = info;
exports.showInfo = showInfo;