define([
  'jquery',
  'underscore',
  'backbone',
  'lugares',
  'collections/LugaresCollection'
], function($, _ , Backbone, CatalogoLugares , LugaresCollection){

  var AppStoreView = Backbone.View.extend({
    
    el: $("body"),
    
    attributes : {
	    
	    category : false
	    
    },

    initialize: function(params) {
    	
	    if(params === undefined) return true;
	    
	    if(params.toLoad === "lugares")
	    {	    	
	    	var lugares = CatalogoLugares;	
	    	appStore.lugares  = new LugaresCollection('',lugares);
	    	
	    }
    },
    
    render: function(){      
      
    }
    
  });

  return AppStoreView;
  
});
