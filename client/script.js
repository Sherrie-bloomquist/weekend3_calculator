// var objectToSend = {};
var outputText = '';

$(document).ready(function(){
  console.log('jq');
  $('#clearButton').hide();

//POST
var postEquation = function(){
  console.log('in postEquation');
  //assemble object to send
  var firstNumber = $('#num1').val();
  var operation = $('#operation').val();
  var secondNumber = $('#num2').val();
  var objectToSend = {
    x: firstNumber,
    type: operation,
    y: secondNumber,
  };//end objectToSend
  console.log(objectToSend);

  $.ajax({
    type: 'POST',
    url: '/calculatePost',
    data: objectToSend,
    success: function(response){
      console.log('back from calculatePost:', response);
      outputText += '<p>' + response.answer + '</p>';
      $('#answer').append(outputText);
    }, //end success
  });//end postEquation ajax call
}; //end postEquation function


//button functions
$('#getValue').on('click', function(){
  postEquation();
  $('#mainContent').hide();
  $('#img').hide();
  $('#clearButton').show();

}); //end getValue onclick

$('#clearButton').on('click',function(){
  window.location.reload();
  $('#answer').append( '' );
});//end clearButton onclick

}); //end doc ready
