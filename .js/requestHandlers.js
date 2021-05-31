function reqStudentForm(res,req) //to provid a form 
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'StudentForm' was called.");
	 
   fs.readFile(".html/StudentForm.html", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.write(data);
          res.end();
    }
    });
}

function reqStart(res,req)//to provid intro option  
{ 
   var fs = require('fs');
   fs.readFile("index.html", function(err, data) {
   if (err)
   {
         res.writeHead(200, {"Content-Type": "text/html"});
         res.write("<h1>404 Not Found</h1>");
         res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.write(data);
          res.end();
    }
    });
}

function reqIndexCss(res,req) 
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'StudentFormCSS' was called.");
	 
   fs.readFile("css/index.css", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/css"});
          res.write(data);
          res.end();
    }
    });
}


function reqStudentFormCss(res,req) //to provid a form 
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'StudentFormCSS' was called.");
	 
   fs.readFile("css/StudentForm.css", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/css"});
          res.write(data);
          res.end();
    }
    });
}



function reqResultFormcss(res,req)  
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'ResultFormcss' was called.");
	 
   fs.readFile("css/ResultForm.css", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/css"});
          res.write(data);
          res.end();
    }
    });
}

function reqImageFormCss(res,req)  
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'ImageFormCss' was called.");
	 
   fs.readFile("css/ImageForm.css", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/css"});
          res.write(data);
          res.end();
    }
    });
}

function reqDisplayImageCss(res,req)  
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'DisplayImageCss' was called.");
	 
   fs.readFile("css/DisplayImage.css", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/css"});
          res.write(data);
          res.end();
    }
    });
}

function reqDegreeFormCss(res,req)  
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'DegreeFormCss' was called.");
	 
   fs.readFile("css/DegreeForm.css", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/css"});
          res.write(data);
          res.end();
    }
    });
}


function reqConfirmationCss(res,req)  
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'ConfirmationCss' was called.");
	 
   fs.readFile("css/Confirmation.css", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/css"});
          res.write(data);
          res.end();
    }
    });
}


function reqConfirmation(res,req) 
{
  //modules
  var url = require('url');
  var qs = require('querystring');
  var fs = require("fs");

  console.log("Request handler 'Confirmation' was called.");

  var query=url.parse(req.url).query;
  var firstname = qs.parse(query)["fname"];
  var lastname =qs.parse(query)["lname"];
  var id =qs.parse(query)["id"];
  var age =qs.parse(query)["age"];
  var gender =qs.parse(query)["gender"];
  var d =qs.parse(query)["degree"];
  var de = d.trim();
  var degree = de.toLowerCase();


var data = degree + ","+firstname +","+ lastname+","+id+","+gender+","+age;
fs.appendFile("./data/out.csv", data + "\n" ,function(err){ 
  if (err)
{
 console.log(err);
 res.writeHead(200, {"Content-Type": "text/html"});
 res.write("<h1>ERROR CAN NOT SUBMIT </h1>");
 res.end();
}
else
{
  console.log("Successfully Written to File.");
  fs.readFile(".html/Confirmation.html", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
       res.writeHead(200, {"Content-Type": "text/html"});
       res.write(data);
       res.end();
    }
    });
}
});

}


function reqResult(response,request) //result from degree form 
{ 

//modules 
const readline = require('readline');
const fs = require('fs');
var url = require('url');
var qs = require('querystring');

console.log("Request handler 'Result' was called.");

let rl = readline.createInterface({
    input: fs.createReadStream("./data/out.csv")
});

let line_no = 0;
var lines = [];
var query=url.parse(request.url).query;
var d = qs.parse(query)["degree"];
var degree = d.trim();
var name = degree.toLowerCase();

rl.on('line', function(line) {
   console.log(line);
   checker(line);
});
rl.on('close', function(line) {
    console.log('Total lines : ' + line_no);
    console.log('Write'+ lines);
rl.close();
display();
});



function checker(data)//to find matches 
{
  var line = data.split(',');
  var a = line[0];

  if(a == name )
  {
      line_no++;
      lines.push(data);
  }

}


function display()//to display result in tabular form 
{
  
  var path1 = '/';
  var path2= '/DegreeForm';
  var body ='<?xml version="1.0" encoding="UTF-8"?>'+
'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'+
'<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'+
'<link rel="stylesheet" type="text/css" href="/RFCSS"/>'+
'<title>'+'Result'+'</title>'+
'</head>'+
'<body>'+
'<div id="resultcontainer">'+
'<table>'+
'<tr>'+
'<th>'+
'Degree'+
'</th>'+
'<th>'+
'First Name'+
'</th>'+
'<th>'+
'SurName'+
'</th>'+
'<th>'+
'Student ID'+
'</th>'+
'<th>'+
'Gender'+
'</th>'+
'<th>'+
'Age'+
'</th>'+
'</tr>';
 for(count = 0; count < line_no ; count++)
  {
	body +='<tr>';
   
	 var line = lines[count];
	 var value = line.split(',')
	 var d = value[0];
	 var fn = value[1];
	 var sn = value[2];
	 var id = value[3];
	 var g = value[4];
	 var a = value[5];
	 body +='<td>'+ d + '</td>'+ '<td>' + fn +'</td>'+ '<td>' +sn + '</td>'+'<td>' + id + '</td>'+ '<td>' + g + '</td>'+
	 '<td>' + a + '</td>'+'</tr>';
  }
  body += '</table>'+
'</div>'+
'<div id="homebuttoncontainer">'+
'<button onclick="/">' +'Home' +'</button>'+
'</div>'+
'<div id="homebuttoncontainer2">'+
'<button onclick="/DegreeForm">'+'Search'+'</button>'+
'</div>'+
'</body>'+
'</html>';
     
	 response.writeHead(200, {"Content-Type": "text/html"});
	 response.write(body);
     response.end();

}

}



function  reqDegreeForm(res,req)//degree form 
{
   //module
   var fs = require('fs');
   
   console.log("Request handler 'DegreeForm' was called.");
   
   fs.readFile("./.html/DegreeForm.html", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
          res.writeHead(200, {"Content-Type": "text/html"});
          res.write(data);
          res.end();
    }
    });
}

var location = [];//for uploading images 

function reqUpload(response,request)//uploading image 
{
   var url  = require('url');
   if (request.url == '/Upload') {
    var formidable = require("formidable");
    var fs = require('fs');
    var form = new formidable.IncomingForm();
    form.uploadDir = './tmp';
    form.parse(request, function (err, fields, files) {
    var oldpath = files.fileupload.path;
    console.log("old path "+ oldpath);
    var newpath = './img/' +  files.fileupload.name;
   location[0]=  newpath;
    fs.rename(oldpath, newpath, function (err) {
    if (err) throw err;
    console.log("file uploaded and moved");

  });
   var body = '<?xml version="1.0" encoding="UTF-8"?>'+
'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'+
'<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'+
'<link rel="stylesheet" type="text/css" href="/DICSS"/>'+
'<title>'+'DisplayImage'+'</title>';
'</head>'+
'<body>'+
'<div id="textHolder">'+
'<h1>'+'Your Image'+'</h1>'+
'</div>'+
'<button id="b" onclick="change()">'+'Change size'+'</button>'+
'<div id="imageHolder">';
var b ='</div>'+
'<div id="homebuttoncontainer">';

var c ='</div>'+
'<div id="homebuttoncontainer2">';

var d ='</div>'+
'<script>'+
'function change() {'+
  'document.getElementById("image").width = "750";'+
'}'+
'</script>'+
'</body>'+
'</html>';
response.writeHead(200, {"Content-Type": "text/html"});
response.write(body);
response.write("<img src='/Display' height='500' width='500'  />");
response.write(b);
response.write("<button onclick='/'>Home</button>");
response.write(c);
response.write("<button onclick='/ImageForm'>Search</button>");
response.write(d);
response.end();
 });
}
}

function reqDisplay(response,request)//displaying images 
{
  //module
  var fs = require('fs');
  
  console.log("Request handler 'Display' was called.");
  
  console.log("Request handler 'show' was called.");
  console.log("location is"+location[0]);
  response.writeHead(200, {"Content-Type": "image/png"});
  fs.createReadStream(location[0]).pipe(response);
  location[0] = "";
}

function reqImageForm(res,req) 
{
   //module 
   var fs = require('fs');
   
   console.log("Request handler 'imageForm' was called.");
   
   fs.readFile(".html/ImageForm.html", function(err, data) {
   if (err)
   {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>404 Not Found</h1>");
      res.end();
    } 
	else
   {
       res.writeHead(200, {"Content-Type": "text/html"});
       res.write(data);
       res.end();
    }
    });
}

exports.reqStudentFormCss = reqStudentFormCss;
exports.reqStudentForm = reqStudentForm;
exports.reqConfirmation = reqConfirmation;
exports.reqConfirmationCss = reqConfirmationCss;
exports.reqResult = reqResult;
exports.reqResultFormcss = reqResultFormcss;
exports.reqDegreeForm = reqDegreeForm;
exports.reqDegreeFormCss = reqDegreeFormCss;
exports.reqUpload = reqUpload;
exports.reqDisplay = reqDisplay;
exports.reqDisplayImageCss = reqDisplayImageCss;
exports.reqImageForm = reqImageForm;
exports.reqImageFormCss = reqImageFormCss;
exports.reqStart = reqStart;
exports.reqIndexCss = reqIndexCss;
