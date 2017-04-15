//Create a function that accepts an array. Every time that array has three odd
//values in a row, print "That's odd!" Every time the array has three evens in
//a row, print "Even more so!"

function EvensAndOdds(arr) {
  var oddCount = 0;
  var evenCount = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 > 0) {
      oddCount += 1;
      if (oddCount === 3) {
        console.log("That's odd!")
        oddCount = 0;
      }
    }
    else {
      evenCount += 1;
      if (evenCount === 3) {
        console.log("That's even!")
        evenCount = 0;
      }
    }
  }
}

var test = [1,1,1,1,1,1,1,2,2,2,1,2,1,2,2,2,1,2,2,1,2,1,2];

EvensAndOdds(test);
