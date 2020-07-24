// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-mastered").on("click", function(event) {
      var id = $(this).data("id");
  
      var newMasteredState = {
        mastered: true
      };
  
      // Send the PUT request.
      $.ajax("/api/list/" + id, {
        type: "PUT",
        data: newMasteredState
      }).then(
        function() {
          console.log("changed mastered to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
})