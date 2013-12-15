define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'text!templates/header/HeaderTemplate.html'
], function($, _, Backbone, Config, HeaderTemplate){

    var HeaderView = Backbone.View.extend({

        el: $(".header"),

        initialize: function() {

            this.render();

        },

        events: {
            "click #logo" : function(){
                appRoute.navigate("legales_action" , {trigger: true});

            }
        },


        render: function(){
            localAttributes = this.getAttributesGeneral(appStore.get('language'));
            var fragment=Backbone.history.fragment;

            var flecha="";
            if(fragment.indexOf('barrios')<0) flecha=1;
            else flecha=0;
            var data={
                flecha: flecha
            };
            var compiledTemplate = _.template( HeaderTemplate,data );
            this.$el.html(compiledTemplate);
        },
        getAttributesGeneral: function(lang){
            var attr=null;
            if(lang=="esp"){

                attr=Config.general.esp;

            }
            if(lang=="eng"){
                attr=Config.general.eng;
            }
            return attr;
        }

    });



    return HeaderView;

});
