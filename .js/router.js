"use strict";
var http = require('http');
var url = require('url');
var qs = require('querystring');
var requestHandlers = require("./requestHandlers");

function router(pathname,handle, response,request)
{
        console.log("About to route a request for: " + pathname);

 if (typeof handle[pathname] === 'function')
        {
          handle[pathname]( response,request); // call the appropriate function
    }
    else
    {
      console.log("No handler found for: " + pathname);
          response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("Resource not found!");
      response.end();
    }
}

exports.router = router;
