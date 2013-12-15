define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'models/LugarModel',
], function($, _, Backbone, Config, LugarModel){

  var LugaresCollection = Backbone.Collection.extend({
    
    attributes : {
	    
	    category : "Lugares"
	    
    },
    
    model: LugarModel,
    
    initialize: function(params,items){ //params es es vacio, se usa el 2do parametro
	    var self = this;
	    _.each(items, function(item,key){
		    self.add(item);
	    });
    }

  });
 
  return LugaresCollection;
});
