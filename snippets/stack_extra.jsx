(function(context) {
  var stack = [];
  
  context.interfaceSharedStack = function() { 
    return {
      copy,
      push,
      pop,
      length,
      top,
      listElements
    }; 
  }
  
  function copy() {
    return stack.slice();
  }
  function push(element) {
    return stack.push(element);
  }
  function pop() {
    stack.pop();
  }
  function length() {
    return stack.length;
  }
  function top() {
  	const length = stack.length;
    
    return length ? stack[stack.length - 1] : stack[0];
  }
  function listElements(customPrinter) {
    var printer = customPrinter || function (elem, index) {
      console.log(`Element: ${index} ->`, elem);
    };

    stack.forEach(printer);
  }
  
}(window));

// get an interface instance
const interface = window.interfaceSharedStack();

// do something
interface.push(2);
interface.push(3);
interface.listElements();
// Element: 0 -> 2 \n Element: 1 -> 3

// another interface instance
const anotherInterface = window.interfaceSharedStack();

anotherInterface.push(5);


// log from the old interface reference
interface.listElements();
// Element: 0 -> 2 \n Element: 1 -> 3 Element: 2 -> 5 
