define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/barrios/BarriosListaTemplate.html',
  'models/StorageModel',
   "views/header/HeaderView"

], function($, _ , Backbone, Config , BarriosListaTemplate, AppStore, HeaderView){

  var BarriosListaView = Backbone.View.extend({
    
    el: $(".barrios_content"),

    initialize: function(language) {

            new HeaderView();
            this.render(appStore.get('barrios'));

    },
	
	  events: {
            "click .stylemap-red" : function(){
                appRoute.navigate("presentacion" , {trigger: true});
            }

        },
		
    render: function(model){

        var data = {
            barrios: model,
            _: _

        };
      var BarriosListaCompiledTemplate = _.template( BarriosListaTemplate, data );
      this.$el.html(BarriosListaCompiledTemplate);

	      
    },


      destroy: function(){
          this.undelegateEvents();
          this.$el.removeData().unbind();
          this.unbind();
      }


  });

  return BarriosListaView;
  
});
