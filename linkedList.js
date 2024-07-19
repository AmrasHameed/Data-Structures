// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     insert(value,index) {
//         const node = new Node(value)
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index == 0){
//             if(this.size === 0){
//                 this.head = node
//             } else {
//                 node.next = this.head
//                 this.head = node
//             }
//             this.size++
//         } else {
//             let prev = this.head
//             for(let i = 0; i < index-1; i++){
//                 prev = prev.next
//             }
//             node.next  = prev.next
//             prev.next = node
//             this.size++
//         }
//     }
//     append(value) {
//         const node = new Node(value)
//         if(this.size == 0){
//             this.head = node
//         } else {
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }
//     remove(value) {
//         if (this.size === 0) {
//             return null
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while(prev && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             if(prev.next) {
//                 prev.next = prev.next.next
//                 this.size--
//                 return value
//             } else {
//                 return null
//             }
//         }
//     }
//     removeIndex(index) {
//         if (index < 0 || index >= this.size) {
//             return
//         }
//         if (index === 0){
//             this.head = this.head.next
//         } else {
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next
//             }
//             prev.next = prev.next.next
//         }
//         this.size--
//     }
//     search (value) {
//         if(this.size === 0){
//             return
//         } else {
//             let i=0;
//             let curr = this.head
//             while(curr){
//                 if(curr.value === value){
//                     return i
//                 }else {
//                     curr=curr.next
//                     i++
//                 }
//             }
//             return "Onnumilla"
//         }
//     }
//     reverse() {
//         let prev = null;
//         let curr = this.head;
//         while(curr) {
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }
//     print() {
//         if(this.size === 0){
//             console.log("List is empty");
//         } else {
//             let curr = this.head
//             let listValues = ""
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }
// const list = new LinkedList()
// list.insert(10,0)
// list.print()
// list.insert(20,1)
// list.print()
// list.insert(30,1)
// list.print()
// list.append(40)
// list.print()
// list.reverse()
// list.print()

// class Node {
//     constructor(value){
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
//     print() {
//         if(this.size === 0){
//             console.log("List is empty");
//         } else {
//             let curr = this.head
//             let listValues = ""
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
//     prepend(value) {
//         const node = new Node(value)
//         if(this.size == 0) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     append(value) {
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
//     removeFromFront() {
//         if(this.size == 0) {
//             return null
//         }
//         const value = this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }
//     isPrime(value) {
//         if (value < 2) {
//             return false;
//         }
//         for (let i = 2; i <= Math.sqrt(value); i++) {
//             if (value % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     prime() {
//         let curr = this.head;
//         while (curr) {
//             if (this.isPrime(curr.value)) {
//                 console.log(curr.value + " is prime");
//             }
//             curr = curr.next;
//         }
//     }

//     removeFromEnd() {
//         if(this.size == 0) {
//             return null
//         }
//         const value = this.tail.value
//         if(this.size === 1) {
//             this.head = null
//             this.tail = null
//         } else {
//             let prev = this.head
//             while(prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size++
//         return value
//     }
//     reverse() {
//         let prev = null
//         let curr = this.head
//         while(curr) {
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }
//     search(value) {
//         if(this.size === 0){
//             return null
//         } else {
//             let i=0;
//             let curr = this.head
//             while(curr){
//                 if(curr.value === value){
//                     return i
//                 }else {
//                     curr=curr.next
//                     i++
//                 }
//             }
//             return null
//         }
//     }
//     insert (value, index) {
//         if(index < 0 || index > this.size){
//             return "Invalid"
//         }
//         let node = new Node(value)
//         if(index === 0) {
//             if(this.size == 0){
//                 this.head = node
//             }else{
//                 node.next = this.head
//                 this.head = node
//             }
//             this.size++
//         } else {
//             let prev = this.head
//             for(let i = 0; i < index-1; i++){
//                 prev = prev.next
//             }
//             node.next  = prev.next
//             prev.next = node
//             this.size++
//         }
//     }
//     remove(value) {
//         if (this.size === 0) {
//             return null
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while(prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             if(prev.next) {
//                 prev.next = prev.next.next
//                 this.size--
//                 return value
//             } else {
//                 return null
//             }
//         }
//     }
//     remove(index) {
//         if(index < 0 || index >= this.size) {
//             console.log("invalid");
//             return
//         }
//         if(index == 0){
//             this.head = this.head.next
//         } else {
//             let prev = this.head
//             for(let i=0; i<index-1; i++) {
//                 prev=prev.next
//             }
//             prev.next = prev.next.next
//         }
//         this.size--
//     }
//     middle() {
//         let slow = this.head
//         let fast = this.head
//         while(fast.next && fast.next.next) {
//             fast = fast.next.next
//             slow = slow.next
//         }
//         return slow.value
//     }

// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if(this.isEmpty()) {
        this.head = node
    }
    let prev = this.head
    while(prev.next) {
        prev = prev.next
    }
    prev.next = node
    this.size++
  }

  insert(value,index) {
    if(index <0 || index > this.size) {
        return
    }
    if(index===0) {
        this.prepend(value)
    } else {
        const node = new Node(value)
        let prev = this.head
        for(let i = 0; i < index - 1; i++) {
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }
  }

  reverse() {
    let prev = null
    let curr = this.head
    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
  }
  print() {
    if(this.isEmpty()) {
        console.log('List is Empty')
        return
    }
    let listValue = ''
    let curr = this.head
    while(curr) {
        listValue += ' '+ curr.value
        curr = curr.next
    }
    console.log(listValue)
  }
}

const list = new LinkedList();
list.print();
list.prepend(1);
list.prepend(10);
list.prepend(6);
list.prepend(2);
list.prepend(9);
list.insert(30,1)
list.insert(30,11)
list.reverse()
list.print()
