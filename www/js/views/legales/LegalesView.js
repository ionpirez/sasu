define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/legales/LegalesTemplate.html',
  'views/header/HeaderViewBack'
], function($, _ , Backbone, Config , LegalesTemplate,HeaderViewBack){

  var LegalesView = Backbone.View.extend({
    
   el: $(".legales_content"),

    initialize: function() {

    	new HeaderViewBack();
	    this.render();
	    
    },

    render: function(){
          
      var that = this;
      var LegalesCompiledTemplate = _.template( LegalesTemplate );
      this.$el.html(LegalesCompiledTemplate);
      $("#legales_page").trigger('create');
	      
    }
  });

  return LegalesView;
  
});
