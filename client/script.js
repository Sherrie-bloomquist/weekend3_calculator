// var objectToSend = {};
var outputText = '';

$(document).ready(function(){
  console.log('jq');

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
      outputText += '<p>' + 'The answer is: ' + '<u>' + response.answer + '</u></p>';
      $('#answer').append(outputText);
    }, //end success
  });//end postEquation ajax call
  // getAnswer();
}; //end postEquation function


//GET
// var getAnswer = function(){
// console.log('in getAnswer');
//   $.ajax({
//     type: 'GET',
//     url: '/calculateGet',
//     success: function(response){
//       console.log('back from get call:', response);
//
//
//     }//end success
//
//   });//end ajax call
// }; //end getAnswer

//button functions
$('#getValue').on('click', function(){
  postEquation();
}); //end getValue onclick

$('#clearButton').on('click',function(){
  window.location.reload();
  $('#answer').append( '' );
});//end clearButton onclick

}); //end doc ready
