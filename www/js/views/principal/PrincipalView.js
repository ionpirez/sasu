define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/principal/PrincipalTemplate.html',
 ], function($, _ , Backbone, Config , PrincipalTemplate){

  var PrincipalView = Backbone.View.extend({
    
   el: $(".principal_content"),

    initialize: function() {

	    this.render();
	    
    },

    render: function(){
          
      var that = this;
      var PrincipalCompiledTemplate = _.template( PrincipalTemplate );
      this.$el.html(PrincipalCompiledTemplate);
      $("#principal_page").trigger('create');
	      
    }
  });

  return PrincipalView;
  
});
