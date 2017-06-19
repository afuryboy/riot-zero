import 'babel-polyfill';
import $ from 'jquery';
import './mock';
// import Data from './data';

riot.tag2('route1', '<h6>{route}</h6>', '', '', function(opts) {
        var self = this;
        self.on('mount',function(){
            self.route ='这是route1';
            self.update();
            $.ajax({
                url:'/corp/menu/list',

            }).done(function(res){
                console.log(res);
            })
        })

});

riot.tag2('route2', '<h6>{route}</h6>', '', '', function(opts) {
        var self = this;
        self.route ='这是route2';
        self.update();
});

riot.tag2('test', '<h2>{title}</h2> <a href="#route1">route1</a> <a href="#route2">route2</a>', '', '', function(opts) {
    var self = this;

    $.ajax({
        url:'js/datas/menu.json',

    }).done(function(data){
        console.log(data);
        self.title = 'ccc';
        self.update();
    })

});
