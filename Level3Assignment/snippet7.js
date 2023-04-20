console.log((function f(n) { return ((n > 1) ? n * f(n-1) : n) })(10));

//prints 3628800  (executes recursively) prints factorial of 10 example of IIFE and closure function
// 10 *f(9)
//10 * 9 * f(8)
//10 * 9 * 8 * f(7)
//10 * 9 * 8 * 7 *f(6)
//10 * 9 * 8 * 7 *6* f(5)
//10 * 9 * 8 * 7 *6* 5 * f(4)
//10 * 9 * 8 * 7 *6* 5 * 4 * f(3)
//10 * 9 * 8 * 7 *6* 5 * 4 * 3* f(2)
//10 * 9 * 8 * 7 *6* 5 * 4 * 3* 2 * f(1)
//3628800