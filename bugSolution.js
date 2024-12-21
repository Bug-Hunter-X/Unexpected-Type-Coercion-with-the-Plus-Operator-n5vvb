function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return "Error: Operands must be numbers"; //Handle non-number inputs
  }
}
console.log(foo(1, "1")); // Output: Error: Operands must be numbers
console.log(foo(1, 1)); // Output: 2

//Alternative using parseInt
function foo2(a,b){
    return parseInt(a) + parseInt(b);
}
console.log(foo2(1, "1")); //Output 2
console.log(foo2("1",1)); //Output 2