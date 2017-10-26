$(function() {

  var currentTable;

  for(var i = 1; i < 10; i++) {
    $("ul").append("<li class='available'>" + i + "</li>");
  }

  $("ul").on("click", ".available", function() { //event delegation
    currentTable = $(this);
    $("form").removeClass("hidden").addClass("show");
    $("#tableNo").text("Table Number: " + currentTable.text());
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

  $("ul").on("mouseenter", ".reserved", showTooltip).on("mouseleave", ".reserved", hideTooltip);
  
  function showTooltip() {
    $(this).append("<span class='tooltip'>Name: " + $(this).data("name") + "<br>Size of party: " + $(this).data("party") + "</span>");
  }

  function hideTooltip() {
    $(".tooltip").remove();
  }

  function hide(e) {
    e.preventDefault();
    $("form").addClass("hidden hide").removeClass("show");
  }

});
