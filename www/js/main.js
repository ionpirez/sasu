require.config({

  paths: { 
    "jquery"        : 'libs/jquery/jquery-min',
    "jquerymobile"  : "libs/jquery/jquerymobile",
    "underscore"    : 'libs/underscore/underscore-min',
    "backbone"      : 'libs/backbone/backbone-min',
    "backboneLocalstorage"  : 'libs/backbone/backbone.localStorage',
    "templates"     : '../templates',
    "text"          : 'libs/require/text', /*http://goo.gl/TWa4r*/
    "cordova"       : '../cordova',
    "form"			: 'libs/jquery/form-params', /*http://goo.gl/nIuNx*/
    "msgHelper"			: 'helpers/messagesHelper',
    "touchHelper"			: 'helpers/touchHelper'
  },
  
  shim: {
	        "backbone": {
	              "deps": [ "underscore", "jquery" ],
	              "exports": "Backbone" 
	        },
	        
	        "cordova": {
	         	"exports": "cordova"
	        }
		}

});

require([ "jquery" , "backbone" , "config" , "routers/router" , "models/StorageModel","msgHelper","touchHelper", "cordova"], function( $ , Backbone , Config , AppRoute, AppStore,Msg,TouchH) {

	$( document ).on( "mobileinit",

		function() {

			$.mobile.linkBindingEnabled = false;
			$.mobile.hashListeningEnabled = false;
			$.mobile.defaultPageTransition = "slide";
            $.mobile.touchOverflowEnabled= true;
			console.log('ready');

		}
	);


    require( ["jquerymobile"], function() {
     this.Msg = Msg;
     this.TouchH=TouchH;
	 this.appStore = new AppStore();
	 this.appRoute = new AppRoute();
     this.direcciones=new Array();
     
    });


	 /* PARA DESTRUIR LOS OBJETOS
	 appStore.destroy();
	 appStore.clear();
	 */
	 
	 
	/*
	require( ["jquerymobile"], function() {
			
		
		 //this.appRoute = new AppRoute();
		 
	});
	*/
} );

