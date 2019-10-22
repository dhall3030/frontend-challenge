import "./scss/main.scss";

console.log("hello, world");

$(function() {

  $("#intern_form").on("submit", function(e) {
    e.preventDefault();

    $("input").removeClass("fc-error");
    $( ".fc-error-msg" ).remove();

    var error = false;
    var data = $("#intern_form :input").serializeArray();
    var email = data[0].value;
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,10}\b$/i;

    if(email == "" || !pattern.test(email)){
      $("#email").addClass("fc-error");
      $("#email").parent().prepend( "<span class='fc-error-msg'>Please enter a valid email address.</span>" );
      error = true;
    }

    if(error == false) {
      $("#btnSubmit").attr("disabled", true);

      var thankYou = "<h2>Thanks for your interest!</h2>" +
      "<p>We will review your application and contact you for additional information should your background and experience meet the requirements of one of our openings.</p>";

      $( ".fc-red-btn" ).empty().append("submitting <div class='fc-ellipsis'><div></div><div></div><div></div><div></div></div>");
      setTimeout(function() {
        $( "#intern_form" ).remove();
        $( ".fc-intership-copy" ).empty().append(thankYou);
        console.log(data);
      }, 2000);
    }
  });
});