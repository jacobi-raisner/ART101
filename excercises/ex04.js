let count=0;
let colors=["Orchid", "Coral", "HotPink", "Plum", "Orange", "Blue", "Gray", "Black", "Yellow", "Cyan", "White"];

$("#needy-button").click( function(){
    
    

    $("#needy-button").html("you clicked me " + count + " and the main color today is: " + colors[count] );

    $("#needy-button").css( "background-color", colors[count]);  

    count = count +1;

    $("html").css( "background-color", colors[count]);

   

});







let number =0;
$("#goofy-button").click ( function() {
number = number +4;
$("#goofy-button").html("I have been pressed " + number + " times")

})

