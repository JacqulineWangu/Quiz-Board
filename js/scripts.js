$(document).ready(function(){
    var name = 0;
    $("input[type='button']").click(function(){
        event.preventDefault();
        var fav = [];
        var total = 0;
        $.each($("input[name='ans']:checked"),function(){
            fav.push($(this).val());
        })

        var result = fav.map(function(x){
            return parseInt(x,10);
        });
        result.forEach(function(x){
            total +=x;
        })
        $(".questions").slideUp();
        $(".pointi").fadeIn();
        $(".output").text("Wewe mshenzi your score is "+total+"%")
        alert("We mshenzi your score is "+total+"%");
    })
})