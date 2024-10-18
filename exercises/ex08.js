// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  let current = list.getHead(); 

  while (current !== null) {
      if (current.data === value) {
          const nextNode = current.next;
          
         
          if (current === list.getHead()) {
              list.setHead(nextNode); 
          } else {
              current.prev.next = nextNode; 
          }
          
          if (nextNode !== null) {
              nextNode.prev = current.prev; 
          }

          list.size -= 1; 
          current = nextNode;
      } else {
          current = current.next; 
      }
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5