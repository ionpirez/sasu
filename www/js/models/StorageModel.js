define([
  'underscore',
  'backbone',
  'backboneLocalstorage'
], function(_, Backbone) {

  var StorageModel = Backbone.Model.extend({

	  defaults: {
	  	language         : "esp"
	  },
	  
	  localStorage: new Store("test-storage"),
	  
	  initialize: function(params,lang) {

            if(lang!==undefined){
                this.save({language : lang});

            }

		this.fetch();
		//alert(this.language = lang);


		if( this.get('lugares') === undefined) // si no está definido el objeto de lugares
		{    
		    //lo creamos
		    var self = this;
		    require(['catalogs/'+this.get('language')+'/lugares', 'collections/LugaresCollection'] , function( CatalogoLugares , LugaresCollection){
		    	
		    	var  _LugaresCollection = new LugaresCollection('',CatalogoLugares);
		    	self.save({ lugares : _LugaresCollection })
		    });

		}else {//algo
		//
		}
		
		if( this.get('barrios') === undefined)
		{    
		    var self = this;
		    require(['catalogs/'+this.get('language')+'/barrios', 'collections/BarriosCollection'] , function( CatalogoBarrios , BarriosCollection){
		    	
		    	var  _BarriosCollection = new BarriosCollection('',CatalogoBarrios);

		    	self.save({ barrios : _BarriosCollection })
		    });
		}
		
		if( this.get('tipos_lugares') === undefined)
		{    
		   var self = this;
		   require(['catalogs/'+this.get('language')+'/tipos_lugares', 'collections/TiposLugaresCollection'] , function( CatalogoTiposLugares , TiposLugaresCollection){
		   
		   	var  _TiposLugaresCollection = new TiposLugaresCollection('',CatalogoTiposLugares);
		
		   	self.save({ tipos_lugares : _TiposLugaresCollection })
		   });
		}


	 }
	 
  });

  return StorageModel;

});
