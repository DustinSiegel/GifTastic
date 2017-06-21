// Array of gif topics.
var topics = ["Bouldering", "Sport Climbing", "Trad Climbing", "Skate Boarding", "Mountain Biking", "Skiing", "Cliff Jumping",];

// Global Variables
var url;
var clickEvent;
var dataSwap;
var dataRevert;
var clicked = false;
// Adds buttons to the array and displays all of the buttonss.
function addButtons() {
  $(".gif-Adder").empty();
  for (var i = 0; i < topics.length; i++) {
    var newButton = $("<button>");  
    newButton.addClass("newGif");
    newButton.attr("data-gif", topics[i]);
    newButton.text(topics[i]);

    $(".gif-Adder").append(newButton);
  }
}

$(".add-gif").on("click", function(event) {
  event.preventDefault();
  var gif = $(".gif-Input").val().trim();
  topics.push(gif);
  console.log("gif: " + gif);
  addButtons();
})

addButtons();

// Searches Gify.com for whatever the button pressed and produce a url.

$("button").on("click", function() {
console.log(this);

  var subject = $(this).attr("data-gif");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        subject + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log("subject: " + subject);
    console.log("url: " + queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .done(function(response) {

    var results = response.data;
    console.log(results);

    for (var i = 0; i < 10; i++) {

        $(".gif-display").append("<div class='col-lg-6 col-lg-6  clickEvent'><span>Rating: " + response.data[i].rating.toUpperCase() + "</span><br/><img class='clickEvent' dataSwap='" + response.data[i].images.fixed_height.url + "'dataRevert='" + response.data[i].images.fixed_height_still.url + "' src='" + response.data[i].images.fixed_height_still.url + "'>");  
      }
    // Sets up an action when the gif is clicked. 
      $(".clickEvent").click(function () {
       if (clicked) {
           clicked = false;  
          clickAction(this);
        }
        else {
          clicked = true;
          clickAction(this);
        }
      })
      // Swaps between the on and off data responses
      function clickAction (action) {
        if (clicked) {
          $(action).attr("src", $(action).attr("dataSwap"));
        }
        else {
          $(action).attr("src", $(action).attr("dataRevert"));
        }
      };
  })
})







