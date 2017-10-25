$(function() {

  var currentTable;

  for(var i = 1; i < 10; i++) {
    $("ul").append("<li class='available'>" + i + "</li>")
  }

  $("ul").on("click", ".available", function() {
    $("form").removeClass("hidden");
    currentTable = $(this);
  });

  $("button[name=reserve]").on("click", function(e) {
    currentTable.removeClass("available");
    currentTable.addClass("reserved");

    hide(e);
  });

  $("button[type=button]").on("click", hide);

  function hide(e) {
    e.preventDefault();
    $("form").addClass("hidden");
  }

});
