// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require('../lib/Queue');

function isPalindrome(queue) {
    const tempArray = [];
    const length = queue.size();

    for (let i = 0; i < length; i++) {
        const element = queue.dequeue();
        tempArray.push(element);
        queue.enqueue(element);
    }

    for (let i = 0; i < length / 2; i++) {
        if (tempArray[i] !== tempArray[length - 1 - i]) {
            return false; 
        }
    }
    return true; 
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true