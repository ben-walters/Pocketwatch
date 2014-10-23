define([
    'backbone',
    'core'
    ], function (Backbone, Core) {

    var Header = {
        Router: {},
        Views: {},
        Helpers: {},
        Collections: {}
    }

    Header.Views.Main = Backbone.View.extend({
        initialize: function(){
            this.render('header',JSON.stringify(this.data));
        },
        data: {
            test: "1234"
        },
        setData: function(newData) {
            console.log('DATA1',this.data)
            this.data = newData;
            console.log('DATA2',this.data)
            this.render('header',JSON.stringify(this.data));
        }
    })

    Header.view = new Header.Views.Main()

    return Header;

});