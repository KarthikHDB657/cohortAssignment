console.log(1 + '2' + '2');
console.log(1 + +'2' + '2');
console.log(1 + -'1' + '2');
console.log(+'1' + '1' + '2');
console.log('A' - 'B' + '2');
console.log('A' - 'B' + 2);

//print 122 concats as 2nd item is a string
//32 + or - operand in front of a string converts it to number. so here +"2" will become 2 hence the result will be 
//02 + or - operand in front of a string converts it to number. so here +"2" will become 2 hence the result will be 
//112 concats as its a string after the +'1' later part it prints 12
//NaN2 The — operator can’t be applied to strings, so Javascript takes “A” — “B” to equal NaN. NaN, which has a bunch of unusual properties I can’t fully remember, then gets concatenated with the “2” and you end up with a final answer of “NaN2.”
//NaN The — operator can’t be applied to strings, so Javascript takes “A” — “B” to equal NaN. NaN, which has a bunch of unusual properties I can’t fully remember, then get 2 which is a integer and you end up with a final answer of “NaN.”