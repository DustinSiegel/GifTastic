// Array of gif topics.
var topics = ["Bouldering", "Sport Climbing", "Trad Climbing", "Skate Boarding", "Mountain Biking", "Skiing", "Cliff Jumping"];

// Global Variables

// var gifSelection;
// var buttonPress;
var url;
// var swapData;
// var reSwap;
// var rightClicked;


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
    console.log(response);

    for (var i = 0; i < results.lenght; i++) {
        var gifDiv = $("<div class='item'>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var subjectImage = $("<img>");
        console.log("rating: " + results[i].rating);

        subjectImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.append(p);
        gifDiv.append(subjectImage);
        console.log("gifDiv: " + gifDiv);
        console.log("rating: " + results[i].rating);
        $(".gif-display").prepend(gifDiv);

      }
    })
  })
// })







