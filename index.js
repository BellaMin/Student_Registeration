var server = require("./.js/server");
var router = require("./.js/router");
var requestHandlers = require("./.js/requestHandlers");

//handles 
var handle = {};
handle['/'] = requestHandlers.reqStart;
handle['/start'] = requestHandlers.reqStart;
handle['/StudentForm'] = requestHandlers.reqStudentForm;
handle['/Confirmation'] = requestHandlers.reqConfirmation;
handle['/DegreeForm'] = requestHandlers.reqDegreeForm;
handle['/Result'] = requestHandlers.reqResult;
handle['/ImageForm'] = requestHandlers.reqImageForm;
handle['/Upload'] = requestHandlers.reqUpload;
handle['/Display'] = requestHandlers.reqDisplay;
handle['/SFCSS'] = requestHandlers.reqStudentFormCss;
handle['/RFCSS'] = requestHandlers.reqResultFormcss;
handle['/IFCSS'] = requestHandlers.reqImageFormCss;
handle['/DICSS'] = requestHandlers.reqDisplayImageCss;
handle['/DFCSS'] = requestHandlers.reqDegreeFormCss;
handle['/CCSS'] = requestHandlers.reqConfirmationCss;
handle['/ICSS'] = requestHandlers.reqIndexCss;


server.server(router.router,handle);







