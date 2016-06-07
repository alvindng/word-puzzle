$(document).ready(function(){
  $("#puzzle").submit(function(event){
    event.preventDefault();
    var vowels = ["a","e","i","o","u","y"];
    var sentence = $("#sentence").val();
    var inputs = sentence.split("");
    var newString = [];

    inputs.forEach(function(input) {
      vowels.forEach(function(vowel){
        if (input === vowel) {
          input = "-";
        }
      });
      newString.push(input);
      console.log(newString);
    });
    var puzzleSentence = newString.join("");
    $("#output").append("<p>" + puzzleSentence + "</p>");
  });
});
