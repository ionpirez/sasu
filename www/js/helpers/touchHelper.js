define([ "jquery"], function( $ ) {

    return {

        setActive : function(target,classname,alias){


            if(target.indexOf('#')>=0){ //es un id
                $(target).bind('tap mousedown', function() {

                    $("."+classname).each(function(){

                        $(this).removeClass(classname);

                    });
                    if(alias){
                        $(alias).addClass(classname);
                    }else{
                        $(target).addClass(classname);
                    }

                });
                $(target).bind('touchend startscroll taphold mouseup', function() {
                    if(alias){
                        $(alias).removeClass(classname);
                    }
                    else{
                        $(target).removeClass(classname);
                    }
                });
            }

          else{ //es una clase o un elemento
            $(target).each(function(){
                $(this).bind('tap mousedown', function() {
                    $("."+classname).each(function(){

                        $(this).removeClass(classname);

                    });
                    $(this).addClass(classname);
                });
                $(this).bind('touchend startscroll taphold mouseup', function() {
                    $(this).removeClass(classname);
                });
            });
          }


        },
        goBack:function(){
            if(direcciones[1]){
                direccion="#"+direcciones[1];
                Backbone.history.navigate( "#"+direccion+"/reverse" );
                direcciones.shift();
            }
           else if(direcciones[0]){
                direccion="#"+direcciones[1];
                Backbone.history.navigate( "#"+direccion , { reverse: true, changeHash: false} );
                direcciones.shift();
            }

        }
    }

} );

