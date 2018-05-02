$(document).ready(function() {
  $(".filter").on("change", function(e) {
    e.preventDefault();

    var filter = $(this).val();

    $(".item.active").removeClass("active");

    $("." + filter).addClass("active");


  });
  $(".item").on("click", function() {
    $(".description").toggleClass("active");
  });
});