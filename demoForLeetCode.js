// class Node {
//   constructor(value, parentNode  = null) {
//     this.children = [];
//     this.parent = parentNode;
//     this.value = value;
//   } 

//   addNode (value) {
//     const segments = value.split('/');

//     if (segments.length === 0) {
//       return;
//     }
//     if (segments.length === 1) {
//       const node = new Node(segments[0], this);
//       this.children.push(node);
//       return {node: node, index: this.children.length - 1};
//     }
//     const existingChildNode = this.children.find((child) => child.value === segments[0]);

//     if (existingChildNode) {
//       // if the child node is already exist, then we will add the rest of the segments to the child node
//       existingChildNode.addNode(segments.slice(1).join('/'));
//     } else {
//       const node = new Node(segments[0], this);
//       // if the child node is not exist, then we will create a new node and add the rest of the segments to the child node
//       node.addNode(segments.slice(1).join('/'));
//       this.children.push(node);
//       return {node: node, index: this.children.length - 1};
//     }

//   }

//   removeNode (value) {
//     const segments = value.split('/');
//     if (segments.length === 0) {
//       return;
//     }
//     if (segments.length === 1) {
//       const existingNodeIndex = this.children.findIndex(child => child.value === segments[0]);
//       if (existingNodeIndex < 0) {
//         throw new Error('Node not found');
//       }

//       this.children.splice(existingNodeIndex, 1);
//     }

//     if (segments.length > 1) {
//       const existingChildNode = this.children.find((child) => child.value === segments[0]);

//       if (!existingChildNode) {
//         throw new Error('Node not found');
//       }

//       if (existingChildNode) {
//         // if the child node is already exist, then we will remove the rest of the segments from the child node
//         existingChildNode.removeNode(segments.slice(1).join('/'));
//       }
//     }
//   }

//   find (value) {
//     // Dep first search
//     for (const child of this.children) {
//       if (child.value === value) {
//         return child;
//       }
//       const nestedChildNode = child.find(value);
//       if (nestedChildNode) {
//         return nestedChildNode;
//       }
//     }
//   }
// }

// class Tree {
//   constructor(rootValue) {
//     this.root =  new Node(rootValue);
//   }

//   add (path) {
//     this.root.addNode(path);
//   }

//   remove (path) {
//     this.root.removeNode(path);
//   }

//   find (value) {
//     if (this.root.value === value) {
//       return this.root;
//     }
//     return this.root.find(value);
//   }
// }

// const filesystem = new Tree('/');

// filesystem.add('documents/personal/tax.dox');
// filesystem.add('games/cod.exe');
// filesystem.add('games/cod2.exe');
// filesystem.remove('games/cod.exe');
// filesystem.find('personal');
// // filesystem.remove('games/cod3.exe');
// // filesystem.remove('gamesssss/cod2.exe');
// // console.log(filesystem);
// console.log(filesystem.find('personal'));

// class Tree {
//   constructor() {
//     this.root = new Node(null);
//   }

//   add(value) {
//     this.root.add(value);
//   }

//   remove(value) {
//     this.root.remove(value);
//   }

//   find(value) {
//     return this.root.find(value);
//   }
// }

// class AVLTree extends Tree {
//   add(value) {
//     super.add(value);

//     let curNode = this.root.find(value);

//     while (curNode) {
//       this.balance(curNode);
//       curNode = curNode.parent;
//     }
//   }

//   remove(value) {
//     super.remove(value);

//     this.balance(this.root);
//   }

//   balance(node) {
//     if (node.balanceFactor < -1 ) {
//       if (node.right.balanceFactor < 0) {
//         this.rotateLeft(node);
//       } else if (node.right.balanceFactor > 0) {
//         this.rotateRightLeft(node);
//       }
//     } else if (node.balanceFactor > 1) {
//       if (node.left.balanceFactor > 0) {
//         this.rotateRight(node);
//       } else if (node.left.balanceFactor < 0) {
//         this.rotateLeftRight(node);
//       }
//     }
//   }

//   rotateLeft(node) {

//     // store the right node
//     const rightNode = node.right;

//     // store the right node's left node
//     node.right = null;

//     if (node.parent) {
//       node.parent.right = rightNode;
//       node.parent.right.parent = node.parent;
//     } else if (node === this.root) {
//       this.root = rightNode;
//       this.root.parent = null;
//     }

//     if (rightNode.left) {
//       node.right = rightNode.left;
//       node.right.parent = node;
//     }

//     rightNode.left = node;
//     rightNode.left.parent = rightNode;
//   }

//   rotateRight(node) {
//     const leftNode = node.left;
//     node.left = null;

//     if (node.parent) {
//       node.parent.left = leftNode;
//       node.parent.left.parent = node.parent;
//     } else if (node === this.root) {
//       this.root = leftNode;
//       this.root.parent = null;
//     }

//     if (leftNode.right) {
//       node.left = leftNode.right;
//       node.left.parent = node;
//     }

//     leftNode.right = node;
//     leftNode.right.parent = leftNode;
//   }

//   rotateLeftRight (node) {
//     const leftNode = node.left;
//     node.left = null;

//     const leftRightNode = leftNode.right;
//     leftNode.right = null;

//     if (leftRightNode.left) {
//       leftNode.right = leftRightNode.left;
//       leftNode.right.parent = leftNode;
//       leftRightNode.left = null;
//     }

//     node.left = leftRightNode;
//     node.left.parent = node;

//     leftRightNode.left = leftNode;
//     leftRightNode.left.parent = leftRightNode;

//     this.rotateRight(node);
//   }
//   rotateRightLeft (node) {
//     const rightNode = node.right;
//     node.right = null;

//     const rightLeftNode = rightNode.left;
//     rightNode.left = null;

//     if (rightLeftNode.right) {
//       rightNode.left = rightLeftNode.right;
//       rightNode.left.parent = rightNode;
//       rightLeftNode.right = null;
//     }

//     node.right = rightLeftNode;
//     node.right.parent = node;

//     rightLeftNode.right = rightNode;
//     rightLeftNode.right.parent = rightLeftNode;

//     this.rotateLeft(node);
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.parent = null;
//   }

//   get leftDepth() {
//     if (!this.left) {
//       return 0;
//     }
//     return this.left.depth + 1;
//   }

//   get rightDepth() {
//     if (!this.right) {
//       return 0;
//     }
//     return this.right.depth + 1;
//   }

//   get depth() {
//     return Math.max(this.leftDepth, this.rightDepth);
//   }

//   get balanceFactor () {
//     return this.leftDepth - this.rightDepth;
//   }

//   add(value) {
//     // 
//     if (this.value === null) {
//       this.value = value;
//       return;
//     }

//     if (this.value < value) {
//       if (this.right) {
//         this.right.add(value);
//         return;
//       }
//       const newNode = new Node(value);
//       newNode.parent = this;
//       this.right = newNode;
//       return;
//     }

//     if (this.value > value) {
//       if (this.left) {
//         this.left.add(value);
//         return;
//       }
//       const newNode = new Node(value);
//       newNode.parent = this;
//       this.left = newNode;
//       return;
//     }
//   }

//   find(value) {
//     if (this.value === value) {
//       return this;
//     }

//     if (this.value < value && this.right) {
//       return this.right.find(value);
//     }

//     if (this.value > value && this.left) {
//       return this.left.find(value);
//     }
//   }

//   remove(value) {
//     const identifiedNode = this.find(value);

//     if (!identifiedNode) {
//       throw new Error('Node not found');
//     }

//     // If the identified node has no children (it's a leaf node), it removes the node by calling removeChild on the parent node.
//     if (!identifiedNode.left && !identifiedNode.right) {
//       const identifiedNodeParent = identifiedNode.parent;
//       identifiedNodeParent.removeChild(identifiedNode);
//       return;
//     }

//     if (identifiedNode.left && identifiedNode.right) {
//       const nextBiggerNode = identifiedNode.right.findNext();
//       if (nextBiggerNode !== identifiedNode.right) {
//         this.remove(nextBiggerNode.value);
//         identifiedNode.value = nextBiggerNode.value;
//       } else {
//         identifiedNode.value = identifiedNode.right.value;
//         identifiedNode.right = identifiedNode.right.right;
//       }
//     } else {
//       // If the identified node has only one child, it replaces the current node with its child.
//       const child = identifiedNode.left || identifiedNode.right;

//       identifiedNode.left = child.left;
//       identifiedNode.right = child.right;
//       identifiedNode.value = child.value;
//     }

//     // update the parent of the child node
//     if (identifiedNode.left) {
//       identifiedNode.left.parent = identifiedNode;
//     }

//     // update the parent of the child node
//     if (identifiedNode.right) {
//       identifiedNode.right.parent = identifiedNode;
//     }
//   }

//   removeChild(node) {
//     if (this.left && this.left === node) {
//       this.left = null;
//       return;
//     }

//     if (this.right && this.right === node) {
//       this.right = null;
//       return;
//     }
//     throw new Error('Node not found');
//   }

//   findNext() {
//     if (!this.left) {
//       return this;
//     }

//     return this.left.findNext();
//   }
// }

// const tree = new AVLTree();

// tree.add(1);
// tree.add(3);
// tree.add(2);

// console.log('Tree', tree);
// console.log(tree.find(5));
// console.log(tree.find(7));
// console.log(tree.find(39));

class TrieNode {
  constructor() {
    this.value = null;
    this.children = Array(26);
  }
}

class Trie {

  constructor () {
    this.root = new TrieNode();
  }

  insert (key, value) {
    let node = this.root;

    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key.charCodeAt(i) - 'a'.charCodeAt(0); // 這邊使用英文的字母其 a 的 charCode 是 97

      if (!node.children[alphabetIndex]) {
        node.children[alphabetIndex] = new TrieNode();
      }

      node = node.children[alphabetIndex];
    }

    node.value = value;
  }

  find (key) {
    let node = this.root;

    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key.charCodeAt(i) - 'a'.charCodeAt(0);

      if (!node.children[alphabetIndex]) {
        return false;
      }

      if (node.value === null) {
        return false;
      }

      node = node.children[alphabetIndex];
    }

    return node;
  }

  remove (key) {
    const node = this.find(key);

    node.value = null;
  }
}

const tries = new Trie();

tries.insert('age', 31);
tries.insert('name', 'Max');
tries.insert('names', ['Jay',"TJ"])

tries.find('age');
tries.find('name');
tries.find('names');
tries.find('hobby');

console.log(tries.find('age'));
console.log(tries.find('name'))
console.log(tries.find('names'));
console.log(tries.find('hobby'));