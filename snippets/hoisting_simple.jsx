console.log(message); // Output: undefined
// when in fact we would expect to throw a ReferenceError

var message = 'Hello World';

console.log(message); // 'Hello World'

// the interpreter will view the above as:

var message;  // undefined -> hoisted to the top of the scope.

console.log(message);

message = 'Hello World';

console.log(message); // 'Hello World'


function log() {
  console.log(msg);  // undefined

  var msg ='Hello World';
}

//the interpreter will see:
function log() {
  var msg;
  console.log(msg);
  msg='Hello World';
}