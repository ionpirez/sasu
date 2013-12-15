define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'text!templates/header/HeaderTemplateBack.html'    
], function($, _, Backbone, Config, HeaderTemplateBack){

    var HeaderViewBack = Backbone.View.extend({

        el: $(".header"),

        initialize: function() {

            this.render();

        },


        render: function(){
            localAttributes = this.getAttributesGeneral(appStore.get('language'));

            var compiledTemplate = _.template( HeaderTemplateBack );
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



    return HeaderViewBack;

});
