define([
  'jquery',
  'underscore',
  'backbone',
  'models/BarrioModel',
], function($, _, Backbone , BarrioModel){

  var BarriosCollection = Backbone.Collection.extend({
    
    attributes : {
	    
	    type : "Barrios"
	    
    },
    
    model: BarrioModel,
    
    initialize: function(params,items){ //params es es vacio, se usa el 2do parametro

	    var self = this;
	    _.each(items, function(item,key){
		    self.add(item);
	    });
    }

  });
 
  return BarriosCollection;
});
