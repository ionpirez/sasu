function openInSafari(url){
    
    cordova.exec(
        GAPluginResultHandler,     // A callback function that deals with the JSON object from the CDVPluginResult instance
        GAPluginErrorHandler,        // An error handler
        'GAPlugin',  // What class to target messages to (method calls = message in ObjC)
        'openInSafari', // Which method to call
        [ url] // These go in the CDVInvokedUrlCommand instance's.arguments property
    );
}
function GAPluginResultHandler (result) {  // el callback
    //
}
function GAPluginErrorHandler (error) {
    alert("ERROR: \r\n"+error );
}
