// ENVIRONMENT DATA

let environmentTitle = "The dark empty arena that is odd";

let environmentMood = "uneasy and echoing";

let environmentSounds = [
    "weird echoes",
    "distant bouncing",
    "whispers in the rafters"
];

let environmentElements = [
    "cracked court",
    "flickering scoreboard",
    "abandoned bleachers",
    "hazey blob of mist"
];

let mainEntity = {
    name: "The Ball",
    type: "living object",
    mood: "hungry",
    isMoving: true,
    favoriteElement: environmentElements[0]
};

let interactionCount = 0;


// shows the title when clicked, etc

$("#btn-title").click(function () {

    $("#environment-output").html(
        "<p>" + environmentTitle + "</p>"
    );

});




$("#btn-elements").click(function () {

    let message = "<p>You look around and see:</p>";

    for (let i = 0; i < environmentElements.length; i++) {

        message = message + "<p>- " + environmentElements[i] + "</p>";

    }

    $("#environment-output").html(message);

});


// show button when clicked , change color of text

$("#btn-entity").click(function () {

    let message = "<p>Name: " + mainEntity.name + "</p>";

    message = message + "<p>Type: " + mainEntity.type + "</p>";

    message = message + "<p>Mood: " + mainEntity.mood + "</p>";

    message = message + "<p>Favorite place: " + mainEntity.favoriteElement + "</p>";

    $("#environment-output").html(message);

});


// SHOW SOUNDS

$("#btn-sounds").click(function () {

    let message = "<p>You listen closely...</p>";

    for (let i = 0; i < environmentSounds.length; i++) {

        message = message + "<p>" + environmentSounds[i] + "</p>";

    }

    $("#environment-output").html(message);

});


// TOUCH THE BALL

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


// FUNCTION TO CHANGE ARENA MOOD

function changeArenaMood(arenaMood) {

    // calm state
    if (arenaMood == "calm") {

        $("body").css({
            "background-color": "#1a1a1a",
            "color": "white"
        });

        $("#arena-output").html(
            "<p>The whispers fade.</p>" +
            "<p>The basketball stops moving.</p>"
        );

    }

    // danger state
    else if (arenaMood == "danger") {

        $("body").css({
            "background-color": "#3b1f1f",
            "color": "white"
        });

        $("#arena-output").html(
            "<p>The scoreboard flickers violently.</p>" +
            "<p>You hear bouncing somewhere in the dark.</p>"
        );

    }

    // possessed state
    else {

        $("body").css({
            "background-color": "black",
            "color": "red"
        });

        $("#arena-output").html(
            "<p>The arena is awake.</p>" +
            "<p>The ball is staring directly at you.</p>"
        );

    }

}


// BUTTON EVENTS

$("#calm-button").click(function () {

    changeArenaMood("calm");

});

$("#danger-button").click(function () {

    changeArenaMood("danger");

});

$("#possessed-button").click(function () {

    changeArenaMood("possessed");

});