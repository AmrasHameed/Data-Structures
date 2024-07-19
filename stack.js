// // class Stack {
// //     constructor() {
// //         this.stack = []
// //     }
// //     push(value) {
// //         return this.stack.push(value)
// //     }
// //     pop() {
// //         return this.stack.pop()
// //     }
// //     peek() {
// //         return this.stack[this.stack.length - 1]
// //     }
// //     print() {
// //         console.log(this.stack.toString()); 
// //     }
// //     size() {
// //         return this.stack.length
// //     }
// // }

// // class Stack {
// //     constructor() {
// //         this.stack = {}
// //         this.size = 0
// //     }
// //     push(value) {
// //         this.stack[this.size] = value
// //         this.size++
// //     }
// //     pop() {
// //         delete this.stack[this.size]
// //         this.size--
// //     }
// //     peek() {
// //         return this.stack[this.size - 1]
// //     }
// //     sizes() {
// //         return this.size
// //     }
// //     print() {
// //         console.log(this.stack)
// //     }
// // }

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
// class Linkedlist {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     push(value) {
//         let node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }
//     pop() {
//         if(this.size == 0) {
//             console.log('List is empty'); 
//             return
//         }
//         let temp = this.head
//         this.head = this.head.next
//         temp = null
//         this.size--
//     }
//     display() {
//         if(this.size == 0) {
//             console.log("List is empty");
//         }
//         let curr = this.head
//         let listValue = ''
//         while(curr) {
//             listValue += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValue);
//     }
//     peek() {
//         return this.head.value
//     }
//     getSize() {
//         return this.size
//     }
// }

// const list = new Linkedlist()
// list.display()
// list.pop()
// list.push(15)
// list.push(23)
// list.push(19)
// list.push(15)
// list.push(16)
// list.display()
// console.log(list.peek());
// console.log(list.getSize());
// list.display()

class Stack {
    constructor() {
        this.stack = {}
        this.size = 0
    }
    push(value) {
        this.stack[this.size] = value
        this.size++
    }
    pop() {
        delete this.stack[this.size - 1]
        this.size--
    }
    peek() {
        return this.stack[this.size - 1]
    }
    print(){
        console.log(this.stack)
    }
}

const stack = new Stack()
stack.push(10)
stack.push(12)
stack.push(34)
stack.push(1)
stack.print()
console.log(stack.peek()); 
stack.pop()
stack.print()