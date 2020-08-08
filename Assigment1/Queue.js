// Implement queue using two stacks

// implement stacks using plain arrays with push and pop functions
var Stack1 = [];
var Stack2 = [];

//Implement enqueue method by using only stacks
//and the push & pop functions
function Enqueue(element) {
  Stack1.push(element);
}

// Implement dequeue method by pushing all elements
//from stack 1 into  stack 2 which reverses the order
//And then popping from stack 2
function Dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) {
      return "Cannot dequeue because queue is empty";
    }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

Enqueue("a");
Enqueue("b");
Enqueue("c");
Dequeue();

// 2nd Example
class Queue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }
  enqueue(item) {
    this.inputStack.push(item);
  }
  dequeue(item) {
    this.outputStack = [];
    if (this.inputStack.length > 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    if (this.outputStack.length > 0) {
      console.log(this.outputStack.pop());
      this.inputStack = [];
      while (this.outputStack.length > 0) {
        this.inputStack.push(this.outputStack.pop());
      }
    }
  }

  listIn() {
    let i = 0;
    while (i < this.inputStack.length) {
      console.log(this.inputStack[i]);
      i++;
    }
  }
  listOut() {
    let i = 0;
    while (i < this.outputStack.length) {
      console.log(this.outputStack[i]);
      i++;
    }
  }
}
