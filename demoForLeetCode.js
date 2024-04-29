class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heapElements = [];
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);

    this.heapElements.push(newNode);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex - 1) / 2);

    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex].priority > this.heapElements[parentElementIndex].priority
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      this.heapElements[parentElementIndex] = newNode;
      this.heapElements[currentElementIndex] = parentElement;
      currentElementIndex = parentElementIndex;
      parentElementIndex = Math.floor((currentElementIndex - 1) / 2);
    }
  }

  process() {
    if (this.heapElements.length === 0) {
      return null;
    }

    if (this.heapElements.length === 1) {
      return this.heapElements.pop();
    }

    const topElement = this.heapElements[0];

    this.heapElements[0] = this.heapElements.pop();

    let currentElementIndex = 0;
    let leftChildIndex = 2 * currentElementIndex + 1;
    let rightChildIndex = 2 * currentElementIndex + 2;
    let childElementIndex = this.heapElements[rightChildIndex] && this.heapElements[rightChildIndex].priority >= this.heapElements[leftChildIndex].priority ? rightChildIndex : leftChildIndex;
  
    while (this.heapElements[childElementIndex] && this.heapElements[currentElementIndex].priority <= this.heapElements[childElementIndex].priority) {
      const currentNode = this.heapElements[currentElementIndex];
      const childNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = childNode;
    }
  
    return topElement;
  }
}

const heap = new PriorityQueue();

heap.insert("Clean the room", 1);
heap.insert("Wash the dishes", 2);
heap.insert("Buy groceries", 3);

heap.process();

console.log("🚀 ~ heap:", heap)