class Collection {
    constructor(elements) {
        this.elements = Array.isArray(elements) ? elements : [elements];
    }

    clear() {
        this.array.clear();
    }

    print() {
        console.log(this.array);
    }

    remove() {
        this.poll();
    }

    isEmpty() {
        return this.array.length == 0 ? true : false;
    }

    peek() {}

    poll() {}

    length() {
        return this.array.length;
    }
}

class Stack extends Collection {
    push(value) {
        this.array.push(value);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.array.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.array[-1];
        }
    }

    poll() {
        return this.pop();
    }

    remove() {
        this.array.pop();
    }
}

class Queue extends Collection {
    enqueue(value) {
        this.array.push(value);
    }

    dequeue() {
        return this.array.shift();
    }

    peek() {
        if (!this.isEmpty()) {
            return this.array[0];
        }
    }

    poll() {
        if (!this.isEmpty) return this.dequeue();
    }

    remove() {
        if (!this.isEmpty) this.dequeue();
    }
}

const stack = new Stack();
stack.push(3);
console.log(stack.pop());
console.log(stack.isEmpty());

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(2);
console.log(queue.dequeue());

console.log(stack.peek(), queue.peek());
queue.print();

const arr = queue.toArray().map((a) => console.log(a));
