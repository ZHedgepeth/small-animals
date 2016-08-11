$(document).ready(function() {

  $("form#animals").submit(function(event) {
    event.preventDefault();

    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "turtle") {
      window.open("file:///Users/Guest/Desktop/small-animals/turtle-page.html");
    }

    else if (animal === "snake") {
      window.open("file:///Users/Guest/Desktop/small-animals/snakes.html");
    }

    else if (animal === "insect") {
      window.open("file:///Users/Guest/Desktop/small-animals/insects.html");
    }

    else if (animal === "boots") {

      alert("that's not an animal!");
    }

  });
});
