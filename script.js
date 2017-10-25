$(function() {

  var currentTable;

  for(var i = 1; i < 10; i++) {
    $("ul").append("<li class='available'>" + i + "</li>")
  }

  $("ul").on("click", ".available", function() { //event delegation
    currentTable = $(this);
    $("form").removeClass("hidden");
  });

  $("button[name=reserve]").on("click", function(e) {
    var info = {
      name: $("input[name=name]").val(),
      phone: $("input[name=phone]").val(),
      party: $("input[name=party]").val()
    }

    currentTable.removeClass("available").addClass("reserved").data(info);

    hide(e);
    $("input[name=name], input[name=phone], input[name=party]").val("");
  });

  $("button[type=button]").on("click", hide);

  function hide(e) {
    e.preventDefault();
    $("form").addClass("hidden");
  }

});
