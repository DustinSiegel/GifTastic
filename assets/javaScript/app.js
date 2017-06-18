var gifButtons = ["Bouldering", "Sport Climbing", "Trad Climbing", "Skate Boarding", "Mountain Biking", "Skiing", "Cliff Jumping"];

function addButton() {

  $("#gif-Adder").empty();

  for (var i = 0; i < gifButtons.length; i++) {

    var newButton =$("<button>");

    newButton.addClass("newGif");
    newButton.attr("data-gif", gifButtons[i]);
    newButton.text(gifButtons[i]);

    $("#gif-Adder").append(newButton);
  }
}

$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gif = $("#gif-Input").val().trim();
  gifButtons.push(gif);
  addButton();
})

addButton();