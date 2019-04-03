$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();

   var user_answer = $("input#palindrome_user").val();
   var i;
   var sentence = " ";

   for ( i = user_answer.length - 1 ; i>= 0 ; i--) {
    sentence += user_answer[i];
   }

   $("#finalResult").text(sentence);
   $("#hidden").show();
 });
 });
