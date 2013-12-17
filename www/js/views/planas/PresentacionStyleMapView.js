define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'views/header/HeaderViewBack'
], function($, _ , Backbone, Config ,HomeViewBack){

  var PresentacionStyleMapView = Backbone.View.extend({
    
   el: $(".presentacion_content"),

    initialize: function() {
    	new HomeViewBack();
	    this.render();
	    
    },

    render: function(){
        var that = this;
        $.get('templates/planas/'+appStore.get('language')+"/PresentacionStylemapTemplate.html", function(PresentacionStylemapTemplate){

            var PresentacionCompiledTemplate = _.template( PresentacionStylemapTemplate );
            that.$el.html(PresentacionCompiledTemplate);
        });
          


      
    }
  });

  return PresentacionStyleMapView;
  
});
