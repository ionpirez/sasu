define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/mapa/MapaTemplate.html'
], function($, _ , Backbone, Config , MapaTemplate){

  var MapaView = Backbone.View.extend({
    
    el: $(".mapa_content"),

    initialize: function(_cords) {
    
	    this.render(_cords);
	    
    },

    render: function(_cords){
      var data = {
      	cords : _cords
      };    
      var MapaCompiledTemplate = _.template( MapaTemplate,data );
      this.$el.html(MapaCompiledTemplate);
        
	      
    }
  });

  return MapaView;
  
});
