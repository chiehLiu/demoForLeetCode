class Node {
  constructor (value, priority) {
    this.value = value;
    this.next = null;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor () {
    this.first = null;
  }

  // insert a new node
  insert (value, priority) {
    const newNode = new Node(value, priority);

    // if the queue is empty or the new node has higher priority than the first node
    if (!this.first || priority > this.first.priority) {

      // the new node points to the first node
      newNode.next = this.first;

      // update the first node
      this.first = newNode;
    } else {
      let currentNode = this.first;

      // find the right place to insert the new node, based on the priority value of the nodes in the queue
      while (currentNode.next && priority < currentNode.next.priority) {
        // move to the next node
        currentNode = currentNode.next;
      }
      
      // insert the new node
      newNode.next = currentNode.next;
      // update the next node of the current node
      currentNode.next = newNode;
    }
  }

  // return and remove the first node
  process () {
    const first = this.first;
    this.first = this.first.next;
    return first;
  }
}

const queue = new PriorityQueue();

queue.insert('clean', 1);
queue.insert('do tax', 100);
queue.insert('learn to code', 1000);

console.log(queue);

console.log(queue.process());
console.log(queue.process());
console.log(queue.process());