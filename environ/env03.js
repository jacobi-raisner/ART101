
let environmentTitle = "The dark empty arena that is odd";

let environmentMood = "uneasy and echoing";

let environmentSounds = ["weird echoes", "distant bouncing", "whispers in the rafters"];


let environmentElements = ["cracked court", "flickering scoreboard", "abandoned bleachers", "hazey blob of mist"];

let mainEntity = {
    name: "The Ball",
    type: "living object",
    mood: "hungry",
    isMoving: true,
    favoriteElement: environmentElements[0]
};

let interactionCount = 0;



// show title
$("#btn-title").click(function () {
    $("#environment-output").html("<p>" + environmentTitle + "</p>");
});

// show stuff to person
$("#btn-elements").click(function () {

    let message = "<p>You look around and see:</p>";

    for (let i = 0; i < environmentElements.length; i++) {
        message = message + "<p>- " + environmentElements[i] + "</p>";
    }

    $("#environment-output").html(message);
});

// show main entity
$("#btn-entity").click(function () {

    let message = "<p>Name: " + mainEntity.name + "</p>";
    message = message + "<p>Type: " + mainEntity.type + "</p>";
    message = message + "<p>Mood: " + mainEntity.mood + "</p>";
    message = message + "<p>Favorite place: " + mainEntity.favoriteElement + "</p>";

    $("#environment-output").html(message);
});

// show sounds
$("#btn-sounds").click(function () {

    let message = "<p>You listen closely...</p>";

    for (let i = 0; i < environmentSounds.length; i++) {
        message = message + "<p>" + environmentSounds[i] + "</p>";
    }

    $("#environment-output").html(message);
});

// interaction counter
$("#btn-touch").click(function () {

    interactionCount = interactionCount + 1;

    let message = "<p>You touched the ball " + interactionCount + " times.</p>";

    if (interactionCount > 3) {
        message = message + "<p>It feels warmer now.</p>";
    }

    if (interactionCount > 6) {
        message = message + "<p>It is definitely moving on its own.</p>";
    }

    $("#environment-output").html(message);
});