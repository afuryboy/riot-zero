<test>
  <h2>{title}</h2>
  <a href="#route1">route1</a>
  <a href="#route2">route2</a>
  <script>
    var self = this;

    $.ajax({
        url:'js/datas/menu.json',

    }).done(function(data){
        console.log(data);
        self.title = 'ccc';
        self.update();
    })

  </script>
</test>
