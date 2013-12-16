define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/lunaciones/LunacionesTemplate.html',
 ], function($, _ , Backbone, Config , LunacionesTemplate){

  var LunacionesView = Backbone.View.extend({
    
   el: $(".lunaciones_content"),

    initialize: function() {

	    this.render();
	    
    },

    render: function(){
          
      var that = this;
      var LunacionesCompiledTemplate = _.template(LunacionesTemplate );
      this.$el.html(LunacionesCompiledTemplate);
      $("#lunaciones_page").trigger('create');
	      
    }
  });

  return LunacionesView;
  
});
