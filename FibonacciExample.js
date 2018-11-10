var fiboWithArray = function(n) {
  var fbnci = [0, 1];

  var index = 0;
  while(index < n) {
    if(index == 0 || index == 1) { index++; continue; }
    fbnci.push(fbnci[index-1] + fbnci[index-2]);
    index++;
  }
  console.log("\n\n");
  console.log("Fibonacci with Array:");
  console.log(fbnci);
  //What raghav asks
  console.log("The answer is:", fbnci[n-1]);
}


//Given n, print out the n'th fibonacci number without storing the series - 011235


// 0 1 
// when A = 0, B = 1, C = A + B = 1
// when A = 1, B = 1, C = A + B = 2
// when A = 1, B = 2, C = A + B = 3
// when A = 2, B = 3, C = A + B = 5
// ...
//0 1 1 2 3 5

var fiboWithoutArray = function(n) {
  var A = 0;
  var B = 1;
  var C;

  for(i=0; i<n-2; i++) {
    C = A + B;
    A = B;
    B = C; 
  }

  console.log("Fibonacci without Array:");
  console.log("The answer is:" + C);
}

fiboWithoutArray(25);
fiboWithArray(25);