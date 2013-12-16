define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/intro/IntroTemplate.html'
], function($, _ , Backbone, IntroTemplate){

    var IntroView = Backbone.View.extend({

        el: $("#intro_content"),

        initialize: function() {

            this.render();

        },

        render: function(){

            var IntroCompiledTemplate = _.template( IntroTemplate );
            this.$el.html(IntroCompiledTemplate);

        }

    });

    return IntroView;

});
