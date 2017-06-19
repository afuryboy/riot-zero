<route1>
    <h6>{route}</h6>
    <script>
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

    </script>
</route1>
