//define functions here

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();
});

function getIt(){
  $('p').on("click", function(){
    return alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('#typing').on('keydown', function(key){
    if(key.which == 71)
    return alert('You have pressed G key')
  });
}

function submitIt(){
  $('form').on('submit', function(){
    return alert("Your form is going to be submitted now.")
  });
}
