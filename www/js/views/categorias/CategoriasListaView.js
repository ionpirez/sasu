define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/categorias/CategoriasListaTemplate.html',
  'views/header/HeaderView'
], function($, _ , Backbone, Config , CategoriasListaTemplate,HeaderView){

  var CategoriasListaView = Backbone.View.extend({
    
    el: $(".categorias_content"),

    initialize: function() {
    	if (window.headerViewBack) window.headerViewBack.destroy();
    	new HeaderView();
	    this.render();
	    
    },

    render: function(){

      var data={
          categorias: appStore.get('tipos_lugares')
      };
      var CategoriasListaCompiledTemplate = _.template( CategoriasListaTemplate, data );
      this.$el.html(CategoriasListaCompiledTemplate);
        
	      
    },
  });

  return CategoriasListaView;
  
});
