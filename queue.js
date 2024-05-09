// class Queue {
//     constructor() {
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element) {
//         this.items[this.rear] = element
//         this.rear++
//     }

//     dequeue() {
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty() {
//         return this.rear - this.front === 0
//     }

//     peek() {
//         return this.items[this.front]
//     }

//     size() {
//         return this.rear - this.front
//     }

//     print() {
//         console.log(this.items);
//     }
// }


// class CircularQueue {
//     constructor(capacity) {
//         this.items = new Array(capacity)
//         this.capacity = capacity
//         this.currentLength = 0
//         this.rear = -1
//         this.front = -1
//     }

//     isFull() {
//         return this.currentLength === this.capacity
//     }

//     isEmpty() {
//         return this.currentLength === 0
//     }

//     enqueue(element) {
//         if(!this.isFull()) {
//             this.rear = (this.rear + 1) % this.capacity
//             this.items[this.rear] = element
//             this.currentLength += 1
//             if(this.front == -1) {
//                 this.front = this.rear
//             }
//         }
//     }
//     dequeue() {
//         if(this.isEmpty()) {
//             return null
//         }
//         const item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front + 1) % this.capacity
//         this.currentLength -= 1
//         if(this.isEmpty()) {
//             this.front = -1
//             this.rear = -1
//         }
//         return item
//     }

//     peek() {
//             if(!this.isEmpty()) {
//                 return this.items[this.front]
//             }
//             return null
//     }

//     print() {
//         if(this.isEmpty()) {
//             console.log('Queue is empty');
//         } else {
//             let i
//             let str = ''
//             for(i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
//                 str += this.items[i] + ' '
//             }
//             str += this.items[i]
//             console.log(str);
//         }
//     }
// }
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null 
//         this.size = 0
//     }

//     enqueue(value) {
//         const node = new Node(value)
//         if(this.size == 0) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     dequeue() {
//         if (this.size === 0) {
//             return null
//         } else {
//             const item = this.head
//             if(this.head === this.tail) {
//                 this.tail = null
//             }
//             this.head = this.head.next
//             this.size--
//             return item
//         }
//     }

//     print() {
//         if(this.size == 0) {
//             console.log("List is empty");
//             return
//         }
//         let curr =this.head
//         let listValue = ""
//         while(curr) {
//             listValue += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValue);
//     }
// }

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
    enqueue(value) {
        const node = new Node(value)
        if(this.size === 0) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue() {
        if(this.size === 0) {
            return null
        }
        const item = this.front
        this.front = this.front.next
        this.size--
        return item
    }
    print() {
        if(this.size == 0) {
            console.log("List is empty");
            return
        }
        let curr =this.front
        let listValue = ""
        while(curr) {
            listValue += `${curr.value} `
            curr = curr.next
        }
        console.log(listValue);
    }
}

const list = new LinkedList()
list.print()
list.enqueue(19)
list.enqueue(1)
list.enqueue(34)
list.enqueue(4)
list.enqueue(0)
list.print()
console.log(list.dequeue())
list.print()
console.log(list);

// const queue = new CircularQueue(5)
// queue.print()
// queue.enqueue(10)
// queue.enqueue(2)
// queue.enqueue(1)
// queue.enqueue(0)
// queue.enqueue(9)
// queue.print()
// console.log(queue);