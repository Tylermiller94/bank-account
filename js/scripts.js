//Business
function Account(name, initial){
  this.name = name;
  this.initial = initial;
}
// make this a protoype
function transfer(initial, deposit, withdrawl){
  initial += deposit;
  initial -= withdrawl;
  return initial;
}

//Interface
$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var initial = parseInt($("#initial").val());
    var account = new Account(name, initial);
    var withdrawl = parseInt($("#withdrawl").val());
    var deposit = parseInt($("#deposit").val());
    var newBalance = account.transfer(account.initial, deposit, withdrawl);
    console.log(newBalance);
  });
});
