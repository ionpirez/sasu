define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/dashboard/DashboardTemplate.html',
 ], function($, _ , Backbone, Config , DashboardTemplate){

  var DashboardView = Backbone.View.extend({
    
   el: $(".dashboard_content"),

    initialize: function() {

	    this.render();
	    
    },

    render: function(){
          
      var that = this;
      var DashboardCompiledTemplate = _.template( DashboardTemplate );
      this.$el.html(DashboardCompiledTemplate);
      $("#dashboard_page").trigger('create');
	      
    }
  });

  return DashboardView;
  
});
