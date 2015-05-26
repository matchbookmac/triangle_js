describe('triangle', function() {
  it("is false for three sides that do not a triangle make", function() {
    var testTriangle = { side1: 2, side2: 3, side3: 9 };
    expect(triangle(testTriangle)).to.equal(false);
  });

  it("is true for three sides that make a triangle", function() {
    var testTriangle = { side1: 2, side2: 2, side3: 2 };
    expect(triangle(testTriangle)).to.equal(true);
  });
});

describe('equilateral', function() {
  it("returns true if the triangle is equilateral", function() {
    var testTriangle = { side1: 2, side2: 2, side3: 2 };
    expect(equilateral(testTriangle)).to.equal(true);
  });
  it("returns flase if the triangle is not equilateral", function() {
    var testTriangle = { side1: 2, side2: 2, side3: 3 };
    expect(equilateral(testTriangle)).to.equal(false);
  });
});

describe('isosceles', function() {
  it("returns true if the triangle is an isosceles", function() {
    var testTriangle = { side1: 5, side2: 5, side3: 8};
    expect(isosceles(testTriangle)).to.equal(true);
  });
  it("returns false if the triangle is not an isosceles", function() {
    var testTriangle = { side1: 2, side2: 2, side3: 2 };
    expect(isosceles(testTriangle)).to.equal(false);
  });
});

describe('scalene', function() {
  it("returns true if the triangle is an scalene", function() {
    var testTriangle = { side1: 10, side2: 5, side3: 7};
    expect(scalene(testTriangle)).to.equal(true);
  });
  it("returns false if the triangle is not an scalene", function() {
    var testTriangle = { side1: 5, side2: 5, side3: 8 };
    expect(scalene(testTriangle)).to.equal(false);
  });
});
