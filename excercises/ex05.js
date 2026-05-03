let count = 0;
let colors = ["Tan", "Red", "Plum", "Brown", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "White", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink" ]; 

$("#needy-button").click(function () { 
   $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] );
   $("body").css("background-color", colors[count]);
   count = count + 1;

     // new line
    if (colors[count] == "HotPink") { 
        $("#needy-button").after(" _________ ");
    }
    else if (colors[count] == "Orchid") {
            $("#needy-button").after("  ######## ");
    }
    else {
      $("#needy-button").after(" Well ok ");
    }
    if (count==32) { count=0; }
   
});
let number = 0

$("#needy-button").click(function () { 
   $("#needy-button").html( "Clicks: " + number + " Color: " + colors[number] );
   $("body").css("background-color", colors[number]);
   number = number + 1;

   
});
// make button disapear:
$("#disapear").click(function () {
$("#disapear").html( "I have disapeared");



})