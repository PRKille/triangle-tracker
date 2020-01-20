$(document).ready(function() {
  $("form#add").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    $("#equilateral, isoceles, scalene, not-triangle").hide();
    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB) {
      $("#not-triangle").show();
    } else if (sideA === sideB && sideB === sideC) {
      $("#equilateral").show();
    } else if (sideA === sideB && sideB != sideC) {
      $("#isoceles").show();
    } else if (sideB === sideC && sideA != sideB) {
      $("#isoceles").show();
    } else if (sideA === sideC && sideC != sideB) {
      $("#isoceles").show();
    } else if (sideB != sideC && sideA != sideB) {
      $("#scalene").show();
    } else if (sideA != sideC && sideC != sideB) {
      $("#scalene").show();
    } else if (sideA != sideB && sideB != sideC) {
      $("#scalene").show();
    }
event.preventDefault();

  });
});