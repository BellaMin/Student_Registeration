"use strict";
var http = require('http');
var url = require('url');
var route = require("./router");
var qs = require('querystring');

function server(router,handle){
http.createServer(
function (req , res)
{

           var pathname = url.parse(req.url).pathname;
           router(pathname,handle, res,req);
           console.log("Request for " + pathname + " received.");
}
).listen(41188);
console.log("Server has started.");
}
exports.server = server;



//notes 
//My original port number is 41105 due to some errors in ceto (putty) and 41188 was given to me temporary 
