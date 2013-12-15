define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/info/InfoTemplate.html',
 ], function($, _ , Backbone, Config , InfoTemplate){

  var InfoView = Backbone.View.extend({
    
   el: $(".info_content"),

    initialize: function() {

	    this.render();
	    
    },

    render: function(){
          
      var that = this;
      var InfoCompiledTemplate = _.template(InfoTemplate );
      this.$el.html(InfoCompiledTemplate);
      $("#info_page").trigger('create');
	      
    }
  });

  return InfoView;
  
});
