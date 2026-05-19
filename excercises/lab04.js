// click counter
let count = 0;

// your custom creature
let buttonCreature = {
    name: "Echo Orb",
    species: "lost arena spirit",
    favoriteFood: "three-pointers",
    moods: ["quiet", "absurd", "whispering", "god-awful", "basketball-classico", "unstable"]
};

// click function
$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    // build message
    let message = "<p>You clicked me " + count + " times.</p>";

    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    // show on page
    $("#output").html(message);

    // console logs (for screenshot)
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    

});
