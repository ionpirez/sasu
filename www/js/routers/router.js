define([ 
    "jquery",
    "backbone", 
    "views/footer/FooterView",
    "views/header/HeaderView",
    "views/header/HeaderViewBack",
    "views/intro/IntroView",
    "views/barrios/BarriosListaView",
    "views/barrios/BarriosCategoriasView", 
    "views/barrios/BarriosDetallesView",
    "views/categorias/CategoriasListaView",
    "views/lugares/LugarListaView",
    "views/lugares/LugarDetalleView",
    "views/mapa/MapaView",
    "views/legales/LegalesView",
	"views/principal/PrincipalView",
	"views/calendario/CalendarioView",
	"views/ayuda/AyudaView",
	"views/info/InfoView",
	"views/lunaciones/LunacionesView",
	"views/dashboard/DashboardView",
    "views/planas/PresentacionStyleMapView",
    'models/StorageModel',

    
], function( $, Backbone , FooterView, HeaderView,HeaderViewBack, IntroView, BarriosListaView, BarriosCategoriasView , BarriosDetallesView , CategoriasListaView , LugarListaView , LugarDetalleView , MapaView , LegalesView,PrincipalView,CalendarioView,AyudaView,InfoView,LunacionesView,DashboardView,PresentacionView,AppStore) {
    var appRouter = Backbone.Router.extend( {

        initialize: function() {


            new FooterView();
            
            Backbone.history.start();

        },

        routes: {

            ""  			                    : "intro",
			"principal_action"  			                    : "principal",
			"dashboard"  			                    : "dashboard",
			"calendario"  			                    : "calendario",
			"ayuda"  			                    : "ayuda",
			"info"  			                    : "info",
			"lunaciones"  			                    : "lunaciones",
            "barrios_lista?:language"	        : "barrios",
            "barrios_lista?:language/:direccion"	        : "barrios",
            "barrios_categorias?:id_barrio"     : "barrioscat",
            "barrios_categorias?:id_barrio/:direccion"     : "barrioscat",
            "barrios_detalles?:id_barrio"   			    : "barriosdet",
            "categorias_lista"      			: "categoriaslist",
            "categorias_lista/:direccion"      			: "categoriaslist",
            "lugares_lista?:id_barrio/:id_tipo_lugar"         : "lugareslist",
            "lugares_lista?:id_barrio/:id_tipo_lugar/:direccion"         : "lugareslist",
            "lugares_detalle?:id_lugar"         : "lugaresdet",
            "lugares_detalle?:id_lugar/:direccion"         : "lugaresdet",
            "mapa?:cords"                  			: "mapa",
            "legales_action"               			: "legales",
            "presentacion"               			: "presentacion"

        },
        intro: function() {

            $( "#intro_page" ).on( "pageinit", function( event ) {
                $('#intro_content').addClass('loaded');
                new IntroView();
            });         
        },

        barrios: function(language,direccion) {
            direcciones=new Array();
            this.addDirection();
            $("#barrios_content").empty();
            if(!direccion) direccion=false
            else direccion=true
            if(typeof window.barriosListaView!=="undefined") window.barriosListaView.destroy();
            $.mobile.changePage( "#barrios_page" , { reverse: direccion, changeHash: false} );
            if(language!=appStore.get('language') && language!="null"){
                //el lenguaje es diferente borro y creo el objeto
                this.createAppStorage(language , function(){

                    window.setTimeout(function(){
                        new BarriosListaView(language);
                    },700);

                });

            }else{
                new BarriosListaView(language);
            }
        },
        
        barrioscat: function(id_barrio,direccion) {

            this.addDirection();
            if(!direccion) direccion=false
            else direccion=true
            $("#categorias_barrios_content").empty();
            $.mobile.changePage( "#barrios_categorias_page" , { reverse: direccion, changeHash: false} );
            if(typeof window.barriosCategoriasView!=="undefined") window.barriosCategoriasView.destroy();
	        new BarriosCategoriasView(id_barrio);

            
        },

        barriosdet: function(id_barrio) {
            this.addDirection();
            $("#barrios_detalles_content").empty();
            if(typeof window.barriosDetallesView!=="undefined") window.barriosDetallesView.destroy();
	        new BarriosDetallesView(id_barrio);

            $.mobile.changePage( "#barrios_detalles_page" , { reverse: false, changeHash: false} );
        },

        categoriaslist: function(direccion) {

            direcciones=new Array();
            this.addDirection();
            $("#categorias_lista_content").empty();
            if(!direccion) direccion=false
            else direccion=true

            if(typeof window.categoriasListaView!=="undefined") window.categoriasListaView.destroy();
	        new CategoriasListaView();

            $.mobile.changePage( "#categorias_page" , { reverse: direccion, changeHash: false} );
            
        },

        lugareslist: function(id_barrio,id_tipo_lugar,direccion) {
            if(!direccion) direccion=false
            else direccion=true
            this.addDirection();
        	$("#lugar_categoria_content").empty();


            if(typeof window.lugarListaView!=="undefined") window.lugarListaView.destroy();
	        new LugarListaView(id_barrio,id_tipo_lugar);
            $.mobile.changePage( "#lugar_categoria_page" , { reverse: direccion, changeHash: false} );
	        
        },

        lugaresdet: function(id_lugar,direccion) {
            this.addDirection();
        	$("#detalles_lugar_content").empty();
            if(!direccion) direccion=false
            else direccion=true
            if(typeof window.lugarDetalleView!=="undefined") window.lugarDetalleView.destroy();
	        new LugarDetalleView(id_lugar);
            $.mobile.changePage( "#detalles_lugar_page" , { reverse: direccion, changeHash: false} );
                        
        },

        mapa: function(cords) {
            this.addDirection();
			$("#mapa_content").empty();

            $.mobile.changePage( "#mapa_page" , { reverse: false, changeHash: false} );
            if(typeof window.mapaView!=="undefined") window.mapaView.destroy();
	        new MapaView(cords);


            
        },

        legales: function() {
            this.addDirection();
            $("#legales_content").empty();
            $.mobile.changePage( "#legales_page" , { reverse: false, changeHash: false} );

            if(typeof window.legalesView!=="undefined") window.legalesView.destroy();
	        new LegalesView();
                        
        },
		
		 principal: function() {
            this.addDirection();
            $("#principal_content").empty();
            $.mobile.changePage( "#principal_page" , { reverse: false, changeHash: false} );

            if(typeof window.principalView!=="undefined") window.principalView.destroy();
	        new PrincipalView();
                        
        },
		
		calendario: function() {
            this.addDirection();
            $("#calendario_content").empty();
            $.mobile.changePage( "#calendario_page" , { reverse: false, changeHash: false} );

            if(typeof window.calendarioView!=="undefined") window.calendarioView.destroy();
	        new CalendarioView();
                        
        },
		
		
		ayuda: function() {
            this.addDirection();
            $("#ayuda_content").empty();
            $.mobile.changePage( "#ayuda_page" , { reverse: false, changeHash: false} );

            if(typeof window.ayudaView!=="undefined") window.ayudaView.destroy();
	        new AyudaView();
                        
        },
		
		info: function() {
            this.addDirection();
            $("#info_content").empty();
            $.mobile.changePage( "#info_page" , { reverse: false, changeHash: false} );

            if(typeof window.infoView!=="undefined") window.infoView.destroy();
	        new InfoView();
                        
        },
		
		lunaciones: function() {
            this.addDirection();
            $("#lunaciones_content").empty();
            $.mobile.changePage( "#lunaciones_page" , { reverse: false, changeHash: false} );

            if(typeof window.lunacionesView!=="undefined") window.lunacionesView.destroy();
	        new LunacionesView();
                        
        },
		
		dashboard: function() {
            this.addDirection();
            $("#dashboard_content").empty();
            $.mobile.changePage( "#dashboard_page" , { reverse: false, changeHash: false} );

            if(typeof window.principalView!=="undefined") window.dashboardView.destroy();
	        new DashboardView();
                        
        },
        
        presentacion: function() {
            this.addDirection();
            $("#presentacion_content").empty();
            $.mobile.changePage( "#presentacion_page" , { reverse: false, changeHash: false} );

            if(typeof window.presentacionView!=="undefined") window.presentacionView.destroy();
	        new PresentacionView();
                        
        },

        createAppStorage : function(language , cbk ){

            appStore.destroy();
            appStore.clear();
            appStore = new AppStore('',language);

            cbk.call();

        },
        addDirection: function(){
            dir= Backbone.history.fragment.replace("/reverse","");
            if(direcciones[0]!=dir){

            direcciones.unshift(dir);
            }


        }



    });


    return appRouter;

} );