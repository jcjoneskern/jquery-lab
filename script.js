$(function() {

  for(var i = 1; i < 10; i++) {
    $("ul").append("<li class='available'>" + i + "</li>")
  }

  $(".available").on("click", function() {
    $("form").removeClass("hidden");
  });

  $("button[type=button]").on("click", hide);
  $("button[name=reserve]").on("click", hide);




  function hide(e) {
    e.preventDefault();
    $("form").addClass("hidden");
  }

});
