define([
  'jquery',
  'underscore',
  'backbone',
  'models/TiposLugaresModel',
], function($, _, Backbone , TiposLugaresModel){

  var TiposLugaresCollection = Backbone.Collection.extend({
    
    attributes : {
	    
	    type : "TiposLugares"
	    
    },
    
    model: TiposLugaresModel,
    
    initialize: function(params,items){ //params es es vacio, se usa el 2do parametro

	    var self = this;
	    _.each(items, function(item,key){
		    self.add(item);
	    });
    }

  });
 
  return TiposLugaresCollection;
});
