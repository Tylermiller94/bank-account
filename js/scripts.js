//Business




//Interface
$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var initial = parseInt($("#initial").val());

});
  $("#transfer").submit(function(event){
    event.preventDefault();
    var withdrawl = parseInt($("#withdrawl").val());
    var deposit = parseInt($("#deposit").val());
    console.log(withdrawl);
  });
});
