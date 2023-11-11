// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    // Using the Math.PI constant for the value of π
    var area = Math.PI * radius * radius;
    return area;
  }
  
  // Given radius value
  var radius = 10;
  
  // Calculating and displaying the area
  var circleArea = calculateCircleArea(radius);
  console.log('The area of the circle with radius', radius, 'is:', circleArea);
  