$(document).ready(function() {

  $("form#animals").submit(function(event) {
    event.preventDefault();

    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "turtle") {
      window.location = "file:///Users/Guest/Desktop/small-animals/turtle-page.html";
    }
  });

  $("form#animals").submit(function(event) {
    event.preventDefault();

    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "snake") {
      window.location = "file:///Users/Guest/Desktop/small-animals/snakes.html";
    }
  });
});
