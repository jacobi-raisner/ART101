let following = false;


// CLICK EVENT

$("#creature").click(function () {

  $(this).toggleClass("transformed");

  $("#status").text("The creature changed shape.");

});


// HOVER EVENT

$("#creature").hover(

  function () {

    $("#thought").stop(true, true).slideDown(300);

    $("#status").text("The creature revealed a thought.");

  },

  function () {

    $("#thought").stop(true, true).slideUp(300);

    $("#status").text("The thought disappeared.");

  }

);


// KEYBOARD EVENT

$(document).keydown(function (event) {

  if (event.key === " " || event.code === "Space") {

    event.preventDefault();

    following = !following;

    $("#creature").toggleClass("following");

    if (following === true) {

      $("#status").text("The creature is following your cursor.");

    }

    else {

      $("#status").text("The creature stopped following you.");

    }

  }

});


// MOUSE MOVE EVENT

$(document).mousemove(function (event) {

  if (following === true) {

    $("#creature").css({

      left: event.pageX - $("#scene").offset().left + 30,

      top: event.pageY - $("#scene").offset().top + 30

    });

  }

});