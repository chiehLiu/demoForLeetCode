
// MaxHeap
class Heap {
  constructor() {
    this.heapElements = [];
  }

  insert(value) {
    this.heapElements.push(value);
    let currentElementIndex = this.heapElements.length - 1;
    let parentElementIndex = Math.floor((currentElementIndex - 1) / 2);

    while (
      parentElementIndex >= 0 &&
      this.heapElements[currentElementIndex] > this.heapElements[parentElementIndex]
    ) {
      const parentElement = this.heapElements[parentElementIndex];
      this.heapElements[parentElementIndex] = this.heapElements[currentElementIndex];
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

    this.heapElements[0] = this.heapElements.pop();

    let currentElementIndex = 0;
    let leftChildIndex = 2 * currentElementIndex + 1;
    let rightChildIndex = 2 * currentElementIndex + 2;
    let childElementIndex = this.heapElements[leftChildIndex] > this.heapElements[rightChildIndex] ? leftChildIndex : rightChildIndex;
  
    while (this.heapElements[childElementIndex] && this.heapElements[currentElementIndex] <= this.heapElements[childElementIndex]) {
      const currentNode = this.heapElements[currentElementIndex];
      const childNode = this.heapElements[childElementIndex];
      this.heapElements[childElementIndex] = currentNode;
      this.heapElements[currentElementIndex] = childNode;
    }
  }
}

const heap = new Heap();


heap.insert(40);
heap.insert(101);
heap.insert(197);
heap.insert(12);
heap.insert(15);
heap.insert(85);
heap.insert(250);

heap.process();
heap.process();

console.log("🚀 ~ heap:", heap)