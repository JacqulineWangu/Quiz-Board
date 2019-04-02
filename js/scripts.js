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

function add(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) {
    return (question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10);
};

$(document).ready(function () {
    $("but").submit(function (event) {
        
        var question1 = parseInt($('input:radio[name=ans1] : checked').val());
        var question2 = parseInt($('input:radio[name=ans2] : checked').val());
        var question3 = parseInt($('input:radio[name=ans3] : checked').val());
        var question4 = parseInt($('input:radio[name=ans4] : checked').val());
        var question5 = parseInt($('input:radio[name=ans5] : checked').val());
        var question6 = parseInt($('input:radio[name=ans6] : checked').val());
        var question7 = parseInt($('input:radio[name=ans7] : checked').val());
        var question8 = parseInt($('input:radio[name=ans8] : checked').val());
        var question9 = parseInt($('input:radio[name=ans9] : checked').val());
        var question10 = parseInt($('input:radio[name=ans10] : checked').val());
        var result = add(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);

        event.preventDefault();
$("#result").text("YOUR SCORE: " + result + " POINTS OUT OF 10");

if (result <= 5) {
    $("#comment").text("GRACIOUS!! KEEP IT UP.")
    alert("working");
};

    });
});

//} else if (result = 5) {
//    $("#comment").text("AVERAGE. GOOD WORK")
//} else if (result <= 4) {
  //  $("#comment").text("TRY HARDER! RETAKE THE TEST.")
//} else {
  //  $("#comment").text("ANSWER EVERY QUESTION.")
//}
//});
//});