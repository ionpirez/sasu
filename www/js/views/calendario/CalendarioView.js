define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/calendario/CalendarioTemplate.html',
 ], function($, _ , Backbone, Config , CalendarioTemplate){

  var CalendarioView = Backbone.View.extend({
    
   el: $(".calendario_content"),

    initialize: function() {

	    this.render();
	    
    },

    render: function(){
          
      var that = this;
      var CalendarioCompiledTemplate = _.template( CalendarioTemplate );
      this.$el.html(CalendarioCompiledTemplate);
      $("#calendario_page").trigger('create');
	      
    }
  });

  return CalendarioView;
  
});
