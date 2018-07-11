$(document).ready(function(){
  $("#getdata").click(function(){
    var que = $("#search").val();
    $("#search").val("");
    $("#result").empty();
    $.ajax({
      url:'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +que,
      dataType:'jsonp',
      cache:true,
      success:function(response){
        console.log(response);
        for(var i=0;i<response[1].length;i++){
          $("#result").append("<h3><a href=" + response[3][i] + " target='_blank'>" + response[1][i] + "</h3><p> " + response[2][i] + "</p></a></li>");
        }
       
      }
      });
  });
});