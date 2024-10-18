// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  const tempStack = new Stack();
  let foundA = false;

  while (!fruits.isEmpty()) {
    const fruit = fruits.pop();
    tempStack.push(fruit);
    
    if (fruit === a) {
      foundA = true;
      break;
    }
  }

  if (foundA) {
    while (!fruits.isEmpty()) {
      const fruit = fruits.pop();
      
      if (fruit === b) {
        tempStack.push(fruit); 
        break;
      }
    }
  }

  while (!tempStack.isEmpty()) {
    fruits.push(tempStack.pop());
  }
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry