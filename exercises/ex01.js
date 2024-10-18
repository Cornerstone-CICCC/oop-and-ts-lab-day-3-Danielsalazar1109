// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack');

function calcDistance(a, b, stack) {
  const tempArray = [];
  const tempStack = new Stack(); 

  while (!stack.isEmpty()) {
    const element = stack.pop();
    tempArray.push(element);
    tempStack.push(element); 
  }


  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  const indexA = tempArray.indexOf(a);
  const indexB = tempArray.indexOf(b);
  console.log(indexA, indexB); //TESTING
  return Math.abs(indexA - indexB);
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance("Joe", "Jim", students);
console.log(distance); // 3

const distance2 = calcDistance("Joe", "Jill", students);
console.log(distance2); // 2
