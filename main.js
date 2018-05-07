//Store all tags user clisks on
var filterTags = [];
//Store all my programs
var programs = [{
    id: "BKPrideCenter",
    tags: ["leisure", "classes", "substance", "career", "hiv", "community", "active", "bkpride"]
  },
  {
    id: "EdieWindsorSAGECenter",
    tags: ["classes", "meals", "leisure", "health", "legal", "case", "exercise", "active", "edie"]
  },
  {
    id: "GayMenHealthCrisis",
    tags: ["classes", "meals", "health", "substance", "community", "legal", "case", "career", "hiv", "mental", "exercise", "active", "gmhc"]
  },
  {
    id: "LGBTNetwork",
    tags: ["classes", "leisure", "community", "hiv", "active", "lq"]
  },
  {
    id: "QueensCenter",
    tags: ["classes", "meals", "leisure", "health", "community", "exercise", "active", "queensl"]
  },
  {
    id: "SAGEBronx",
    tags: ["classes", "meals", "health", "community", "case", "exercise", "active", "bxsage"]
  },
  {
    id: "SAGEGriot",
    tags: ["classes", "meals", "leisure", "case", "exercise", "active", "bksage"]
  },
  {
    id: "SAGEHarlem",
    tags: ["classes", "meals", "leisure", "health", "community", "case", "hiv", "exercise", "active", "harsage"]
  },
  {
    id: "SAGESI",
    tags: ["health", "leisure", "community", "case", "exercise", "active", "sipride"]
  },
  {
    id: "TheCenter",
    tags: ["leisure", "substance", "community", "career", "hiv", "mental", "active", "cent"]
  },
  {

  }
]

$(document).ready(function() {

  $(".allButton").on("click", function() {
    $(".tagButton").removeClass("on");
    $(".item").addClass("active");
  });

  $(".tagButton").on("click", function() {
    // $(".filter").on("change", function(e) {
    // e.preventDefault();
    // var filter = $(this).attr("name");
    var button = $(this);
    var tag = button.attr('name');
    button.toggleClass("on");

    //If user is selecting button, add 'on' class
    if (button.hasClass('on')) {
      filterTags.push(tag)
    }
    //If user is deselecting button, remove 'on' class
    else {
      var index = filterTags.indexOf(tag);
      filterTags.splice(index, 1)
    }

    //If there are tags selected, remove the 'on' styling on the 'all' button
    if (filterTags.length) $(".allButton").removeClass("on")

    console.log(filterTags)
    findPrograms(filterTags)
    // var filter = $.map($("button").toArray(), function(e) {
    //   return $(e).attr("name");
    // }).join(".");
    //
    // $(".item.active").removeClass("active");
    //
    // $("." + filter).addClass("active");


  });
  // $(".item").on("click", function() {
  //   var item = $(this).find(".description");
  //   item.toggleClass("active");
  // });
});

function findPrograms(filterTags) {
  //If there are tags
  if (filterTags.length) {
    //remove listed programs by removing the 'active' class to prepare for programs with the selected tags
    $(".item").removeClass("active");

    //Iterate through each tag selected by the user
    filterTags.forEach(function(currentTag) {
      //Iterate through each program and look for the tags which are selected.
      programs.forEach(function(currentProgram) {
        //If the tags are found, show the respective programs
        if (currentProgram.tags.indexOf(currentTag) > -1) {

          $("#" + currentProgram.id).addClass("active");
        }
      })
    })
  } else {
    $(".item").addClass("active");
  }
}