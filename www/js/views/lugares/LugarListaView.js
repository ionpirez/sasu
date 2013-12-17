define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'text!templates/lugares/LugarListaTemplate.html',
  'collections/LugaresCollection',
  'collections/TiposLugaresCollection',
  'views/header/HeaderViewBack'
], function($, _ , Backbone, Config , LugarListaTemplate,LugaresCollection,TiposLugaresCollection,HeaderViewBack){

  var LugarListaView = Backbone.View.extend({
    
    el: $(".lugar_categoria_content"),

    initialize: function(id_barrio,id_tipo_lugar) {

        new HeaderViewBack();
	    this.render(parseInt(id_barrio),parseInt(id_tipo_lugar));
	    

    },

    render: function(_id_barrio,_id_tipo_lugar){
       //aqui genero los restaurantes y todo lo demás de los barrios :D
       var  _LugaresCollection = new LugaresCollection('',appStore.get('lugares'));
       var  barrios= appStore.get('barrios');
       if(_id_barrio==0){
       		var  _lugares= new LugaresCollection('',_LugaresCollection.where({id_tipo_lugar: _id_tipo_lugar}));//lugares del barrio para pintar las secciones o no
       		var _barrio={
       			id:0
       		};
       }
       else{
	   		var  _lugares= new LugaresCollection('',_LugaresCollection.where({id_barrio: _id_barrio,id_tipo_lugar: _id_tipo_lugar}));//lugares del barrio para pintar las secciones o no
	   		var _barrio=barrios[_id_barrio-1];
	   }
		
		var  _CategoriasCollection= new TiposLugaresCollection('', appStore.get('tipos_lugares'));
		var _categoria= _CategoriasCollection.where({id: _id_tipo_lugar});
	  		
	  var data = {
            barrio: _barrio,
            lugares : _lugares.models,
            categoria: _categoria[0],
            _: _

        };	
          
      
      var LugarListaCompiledTemplate = _.template( LugarListaTemplate,data );
      this.$el.html(LugarListaCompiledTemplate);
        
	      
    },
    
		    	
	  
      
    
  });

  return LugarListaView;
  
});
