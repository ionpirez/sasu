define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/barrios/BarriosCategoriasTemplate.html',
  'collections/LugaresCollection',
  'collections/BarriosCollection',
  'models/TiposLugaresModel',
  'views/header/HeaderView',
  
], function($, _ , Backbone, Config , BarriosCategoriasTemplate,LugaresCollection,BarriosCollection,CategoriasModel,HeaderView){

  var BarriosCategoriasView = Backbone.View.extend({
    
    el: $(".categorias_barrios_content"),

    initialize: function(_id_barrio) {

		new HeaderView();
        this.render(parseInt(_id_barrio));
	    
    },

    render: function(_id_barrio){

        if(_id_barrio!=8){
            var  _LugaresCollection = new LugaresCollection('',appStore.get('lugares'));
            var  _lugares= new LugaresCollection('',_LugaresCollection.where({id_barrio: _id_barrio}));//lugares del barrio para pintar las secciones o no
            var  barrios= appStore.get('barrios');
            //var _categorias=new Backbone.Collection;
            /*var tipos_lugares=appStore.get('tipos_lugares');
            for(i=1;i<6;i++){
                if(_lugares.where({id_tipo_lugar : i}).length>0){
                    _categorias.add(tipos_lugares.i);
                }


            }*/


          var data = {
                barrio: barrios[_id_barrio-1],
                lugares : _lugares,
                categorias: appStore.get('tipos_lugares'),
                _: _

            };


              var BarriosCategoriasCompiledTemplate = _.template( BarriosCategoriasTemplate,data );
              this.$el.html(BarriosCategoriasCompiledTemplate);
        }
        else{ //es la última categoria

            var that = this;
            $.get('templates/planas/'+appStore.get('language')+"/lastBarrio.html", function(LastBarrio){

                var LastBarrioCompiledTemplate = _.template( LastBarrio );
                that.$el.html(LastBarrioCompiledTemplate);
            });

        }

        
	      
    }
  });

  return BarriosCategoriasView;
  
});
