$(document).ready(function() {
  $("button").on("click", function() {
    // $(".filter").on("change", function(e) {
    // e.preventDefault();

    // var filter = $(this).attr("name");
    var filter = $.map($("button").toArray(), function(e) {
      return $(e).attr("name");
    }).join(".");
    $(".item.active").removeClass("active");

    $("." + filter).addClass("active");


  });
  $(".item").on("click", function() {
    var item = $(this).find(".description");
    item.toggleClass("active");
  });
});