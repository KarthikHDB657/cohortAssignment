var x = 1;
function foo() {
  x = 2;
  console.log(x);
}
foo();
console.log(x);

//prints 2 as its var x is assigned to 2 inside the function as functional scope is get priority than global scope