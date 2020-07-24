// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-mastered").on("click", function (event) {
    var id = $(this).data("id");

    var newMasteredState = {
      mastered: true
    };

    // Send the PUT request.
    $.ajax("/api/list/" + id, {
      type: "PUT",
      data: newMasteredState
    }).then(
      function () {
        console.log("changed mastered to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newList = {
      learn_name: $("#form").val().trim()
    };
    console.log(newList)

    // Send the POST request.
    $.ajax("/api/list", {
      type: "POST",
      data: newList
    }).then(
      function() {
        console.log("created new item to learn");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".remove-mastered").on("click", function (event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/list/" + id, {
      type: "DELETE",
    }).then(
      function () {
        console.log("removed list item");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})