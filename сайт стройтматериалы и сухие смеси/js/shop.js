$('document').ready(function(){
loadGoods();
});

function loadGoods() {
  //загрузаю товары на страницу
  $.getJSON('goods.Json', function(data) {
    //console.log(data);
    var out="";
    for (var key in data){
      out+='<div class="single-goods">';
      out+="<h3>"+data[key]['name']+"</h3>";
      out+="<p>"+data[key]['cost']+"</p>";
      out+="<img src='<img src="'+data [key].image+'">';
      out+='</div>'
    }
    $(''#goods').html(out);
  })
}
