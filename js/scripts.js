$(document).ready(function() {
  $("form#add").submit(function(event) {
    var sideA = parseInt($("input#add1").val());
    var sideB = parseInt($("input#add2").val());
    var sideC = parseInt($("input#add3").val());
if (sideA === sideB && sideB === sideC) {
  $("#equalateral").show();
} else if (sideA === sideB && sideB != sideC) {
  $("#isocele").show();
} else if (sideA != sideB && sideB === sideC) {
  $("#scalene").show();
}  else {
  $("#not-triangle").show();
}



event.preventDefault();

  });
});