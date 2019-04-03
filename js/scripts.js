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
        
    })

  
    $("#q1").click(function(){
        $(".Q1").slideUp();
        $(".Q2").fadeIn(); 
        return false; 
    });
    $("#q2").click(function(){
        $(".Q2").slideUp();
        $(".Q3").fadeIn(); 
        return false; 
    });
    $("#q3").click(function(){
        $(".Q3").slideUp();
        $(".Q4").fadeIn(); 
        return false; 
    });
    $("#q4").click(function(){
        $(".Q4").slideUp();
        $(".Q5").fadeIn(); 
        return false; 
    });
    $("#q5").click(function(){
        $(".Q5").slideUp();
        $(".Q6").fadeIn(); 
        return false; 
    });
    $("#q6").click(function(){
        $(".Q6").slideUp();
        $(".Q7").fadeIn(); 
        return false; 
    });
    $("#q7").click(function(){
        $(".Q7").slideUp();
        $(".Q8").fadeIn(); 
        return false; 
    });
    $("#q8").click(function(){
        $(".Q8").slideUp();
        $(".Q9").fadeIn(); 
        return false; 
    });
    $("#q9").click(function(){
        $(".Q9").slideUp();
        $(".Q10").fadeIn(); 
        return false; 
    });
    

})