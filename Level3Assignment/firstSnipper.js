var x = 1;
function foo() {
  console.log(x);
  var x = 2;
}
foo();

//will print undefined 