var x = 1;
var y = 2;
(function(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
})(x, y);
console.log(x, y);

//prints 1,2 its an example of closure function 