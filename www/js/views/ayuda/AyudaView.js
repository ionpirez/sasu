define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/ayuda/AyudaTemplate.html',
 ], function($, _ , Backbone, Config , AyudaTemplate){

  var AyudaView = Backbone.View.extend({
    
   el: $(".ayuda_content"),

    initialize: function() {

	    this.render();
	    
    },

    render: function(){
          
      var that = this;
      var AyudaCompiledTemplate = _.template(AyudaTemplate );
      this.$el.html(AyudaCompiledTemplate);
      $("#ayuda_page").trigger('create');
	      
    }
  });

  return AyudaView;
  
});
