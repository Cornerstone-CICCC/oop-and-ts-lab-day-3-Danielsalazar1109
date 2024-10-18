// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');
function insertAfterTarget(target, newElement) {
    const tempStack = new Stack();
    let found = false;

    while (!stack.isEmpty()) {
        const element = stack.pop();
        if (element === target) {
            tempStack.push(newElement);
            found = true;
        }
        tempStack.push(element); 
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }

    if (!found) {
        console.log("Target element not found");
    }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // Output should be: A B X C D
