define([ "jquery"], function( $ ) {

    return {

        alert : function(options){

            var defaults = {
                title       : "Message",
                message     : "",
                button_text : "Done",
                callback    : true,
            };

            var settings = $.extend( {}, defaults, options );

            try{
                navigator.notification.alert(
                    settings.message,
                    settings.callback,
                    settings.title,
                    settings.button_text
                );
            }
            catch(err){
                alert(settings.message);
                settings.callback.call();
            }
        }
    }

} );

