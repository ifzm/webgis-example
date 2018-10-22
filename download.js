var fs = require('fs');  
var url = require('url');  
var http = require('http');  
var exec = require('child_process').exec;  
var spawn = require('child_process').spawn;

var download_file_wget = function(file_url) {  
  
    // extract the file name  
    var file_name = file_url.replace(/.*\/(.*)\?.*/, '$1');  
    // compose the wget command  
    var wget = 'wget -c ' + file_url + ' -O ./pbf/' + file_name;
    // excute wget using child_process' exec function  
  
    var child = exec(wget, function(err, stdout, stderr) {  
        if (err) console.log(err);
        else console.log(file_name + ' downloaded to ' + DOWNLOAD_DIR);
    });  
}

var max = 65535;
for (var i = 0; i < max; i++) {
    for (var k = 0)
}