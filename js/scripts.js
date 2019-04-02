function add(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) {
    return question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10;
};

$(document).ready(function () {
$("#quiz1").submit(function (event){
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
 });
});

