// function bubbleSort(arr) {
//     let swap;
//     do {
//         swap = false;
//         for(let i = 0; i < arr.length - 1; i++) {
//             if(arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] 
//                 swap = true
//             }
//         }
//     } while(swap)
// }

// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let num = arr[i]
//         j = i - 1
//         while(j >= 0 && arr[j] > num) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = num
//     }
// }

// function selectionSort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
// }

// function quickSort(arr) {
//     if(arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }


// function mergeSort(arr) {
//     if(arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }
// function merge(left, right) {
//     let sorted = []
//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             sorted.push(left.shift())
//         } else {
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted, ...left, ...right]
// }

// let arr = [4, 1, -1, 0, -5, 10, 19, 2]

// console.log(mergeSort(arr));


// class Stack {
//     constructor() {
//         this.stack = {}
//         this.size = 0
//     }

//     push(value) {
//         this.stack[this.size] = value
//         this.size++
//     }

//     pop() {
//         delete this.stack[this.size - 1]
//         this.size--
//     }

//     peek() {
//         console.log(this.stack[this.size - 1]);
//     }

//     print() {
//         console.log(this.stack);
//     }
// }

// const stack = new Stack()
// stack.print()
// stack.push(9)
// stack.push(0)
// stack.push(13)
// stack.push(2)
// stack.push(7)
// stack.print()
// stack.peek()
// stack.pop()
// stack.print()


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }
    push(value) {
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
    }
    pop() {
        if(this.size == 0) {
            console.log("List is empty");
            return
        }
        let temp = this.head
        this.head = this.head.next
        temp = null
        this.size--
    }

    peek() {
        console.log(this.head.value);
        return
    }

    reverse() {
        let stack = []
        let curr = this.head
        while(curr) {
            stack.push(curr)
            curr = curr.next
        }
        this.head = stack.pop()
        curr = this.head
        while(curr) {
            curr.next = stack.pop()
            curr = curr.next
        }
    }

    print() {
        if(this.size == 0){
            console.log("List is Empty");
            return
        }
        let curr = this.head
        let listValue = ''
        while(curr) {
            listValue += `${curr.value} `
            curr = curr.next
        }
        console.log(listValue);
    }
}

const list = new Linkedlist()
list.print()
list.push(10)
list.push(0)
list.push(2)
list.push(18)
list.push(-1)
list.push(9)
list.print()
list.reverse()
list.print()
console.log(list.head);


// class Queue {
//     constructor() {
//         this.queue = {}
//         this.front = 0
//         this.rear = 0
//     }

//     enqueue(value) {
//         this.queue[this.rear] = value
//         this.rear++
//     }
    
//     dequeue() {
//         delete this.queue[this.front]
//         this.front++
//     }

//     isEmpty() {
//         return this.rear - this.front == 0
//     }

//     peek() {
//         console.log(this.queue[this.front]);
//     }
//     print() {
//         console.log(this.queue);
//     }
// }

// const queue = new Queue()
// queue.print()
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(9)
// queue.enqueue(0)
// queue.enqueue(4)
// queue.enqueue(6)
// queue.enqueue(1)
// queue.print()
// queue.dequeue()
// queue.print()

