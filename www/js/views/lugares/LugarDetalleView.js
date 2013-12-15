define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/lugares/LugarDetalleTemplate.html',
  'collections/LugaresCollection',
  'views/header/HeaderViewBack'
], function($, _ , Backbone, Config , LugarDetalleTemplate,LugaresCollection,HeaderViewBack){

  var LugarDetalleView = Backbone.View.extend({
    
    el: $(".detalles_lugar_content"),

    initialize: function(id_lugar) {
    	//borro el header y pinto el otro
    	 new HeaderViewBack();
	    this.render(parseInt(id_lugar));
	    
	   
    },

    render: function(id_lugar){
       //mando el modelo a la vista

       var  _LugaresCollection = new LugaresCollection('',appStore.get('lugares'));
	   var  _lugar= _LugaresCollection.where({ id: id_lugar});
       

     var data = {

            lugar : _lugar[0],
            _: _

        };	
          
      var LugarDetalleCompiledTemplate = _.template( LugarDetalleTemplate, data );
      this.$el.html(LugarDetalleCompiledTemplate);
        
	      
    }
  });

  return LugarDetalleView;
  
});
