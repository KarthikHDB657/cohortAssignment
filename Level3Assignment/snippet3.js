var x = 10;
function foo() {
  console.log(x);
}
function bar() {
  var x = 20;
  foo();
}
bar();

//will prints 10 as it executes foo after the bar function and it will consider global variable and prints 10 