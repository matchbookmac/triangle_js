var triangle = function(possibleTriangle) {
  var side1 = possibleTriangle.side1
  var side2 = possibleTriangle.side2
  var side3 = possibleTriangle.side3

  if ( (side1 < (side2 + side3)) && (side2 < (side1 + side3)) && (side3 < (side1 + side2)) ) {
    return true;
  } else {
    return false;
  }
};

var equilateral = function(triangle) {
  var side1 = triangle.side1
  var side2 = triangle.side2
  var side3 = triangle.side3

  if((side1 === side2) && (side2 === side3)) {
    return true;
  } else {
    return false;
  }
};

var isosceles = function(triangle) {
  var side1 = triangle.side1
  var side2 = triangle.side2
  var side3 = triangle.side3

  if( ((side1 === side2) || (side1 === side3) || (side3 === side2)) && (!(side1 === side2) || !(side1 === side3) || !(side3 === side2))) {
    return true;
  } else {
    return false;
  }
};

var scalene = function(triangle) {
  var side1 = triangle.side1
  var side2 = triangle.side2
  var side3 = triangle.side3

  if( (side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var possibleTriangle = { side1: side1, side2: side2, side3: side3}

    if (triangle(possibleTriangle)) {
      if (equilateral(possibleTriangle)) {
        $(".type").text("an equilateral");
      } else if(isosceles(possibleTriangle)) {
        $(".type").text("an isosceles");
      } else if(scalene(possibleTriangle)) {
        $(".type").text("a scalene");
      }

    } else {
      $(".type").text("not a");
    }

    $("#result").show();
    event.preventDefault();
  });
});
