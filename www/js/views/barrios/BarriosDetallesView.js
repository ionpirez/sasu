define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/barrios/BarriosDetallesTemplate.html',
  'views/header/HeaderViewBack'
], function($, _ , Backbone, Config , BarriosDetallesTemplate,HeaderViewBack){

  var BarriosDetallesView = Backbone.View.extend({
    
    el: $(".barrios_detalles_content"),

    initialize: function(id_barrio) {
    	new HeaderViewBack();
	    this.render(parseInt(id_barrio));
	    
    },

    render: function(id_barrio){
       //un template para cada barrio
       var template=""
       switch(id_barrio){
       	case 1:
       		template="centroTemplate.html";
       	break;
       	
       	case 2:
       		template="romaTemplate.html";
       	break;
       	
       	case 3:
       		template="condesaTemplate.html";
       	break;
       	
       	case 4:
       		template="zona_rosaTemplate.html";
       	break;
       	
       	case 5:
       		template="polancoTemplate.html";
       	break;
       	
       	case 6:
       		template="ponienteTemplate.html";
       	break;
       	
       	case 7:
       		template="surTemplate.html";
       	break;
       	
       	default:
       	break;
       	
       	
       	
       }
       var that=this;
        $.get('templates/barrios/'+appStore.get('language')+"/"+template, function(BarrioTemplate){


		}).done(function(BarrioTemplate){
                var BarriosDetallesCompiledTemplate = _.template( BarrioTemplate );
                that.$el.html(BarriosDetallesCompiledTemplate);
            });





        
	      
    },
  });

  return BarriosDetallesView;
  
});
