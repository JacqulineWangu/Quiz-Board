function add(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) {return question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10};

$(document.readyState()  (parameter) event: any
$("#quiz").submit(function (event){
    event.preventDefault() ;
    var question1 = parseInt ($('input:radio[name=ans1] : checked').val("D"));
    var question2 = parseInt ($('input:radio[name=ans2] : checked').val("D"));
    var question3 = parseInt ($('input:radio[name=ans3] : checked').val("C"));
    var question4 = parseInt ($('input:radio[name=ans4] : checked').val("D"));
    var question5 = parseInt ($('input:radio[name=ans5] : checked').val("D"));
    var question6 = parseInt ($('input:radio[name=ans6] : checked').val("C"));
    var question7 = parseInt ($('input:radio[name=ans7] : checked').val("C"));
    var question8 = parseInt ($('input:radio[name=ans8] : checked').val("B"));
    var question9 = parseInt ($('input:radio[name=ans9] : checked').val("C"));
    var question10 = parseInt ($('input:radio[name=ans10] : checked').val("B"));
    var result = add(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);
}))

  // UI logic
$(document).ready(function() {
    //to hide our questions
    $('.jsForm').hide();
  
    //to show the questions one by one
    $('#quiz1').show();
  
    $('.jsForm #submit').click(function() {
      current = $(this).parents('form:first').data('question');
      next = $(this).parents('form:first').data('question') + 1;
  
      $('.jsForm').hide();
      $('#quiz' + next + '').fadeToggle(1500);
      process('' + current + '');
      return false;
    });
  
  });
  
  function process(n) {
    var mySubmitted = $('input[name=ans' + n + ']:checked').val();
    if (mySubmitted == value('a' + n + '')) {
      score++;
    }
    if (n == total) {
      $('#results').html('<h3>Your final score is: ' + score + ' out of 10</h3><a href="index.html">Take Quiz Again</a>');
    }
    return false;
  }