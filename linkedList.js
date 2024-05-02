// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.size === 0
//     }
//     getSize() {
//         return this.size
//     }
//     append(value) {
//         const node = new Node(value)
//         if(this.isEmpty()){
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
//     prepend(value) {
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     } 
//     insert(value, index) {
//         if(index < 0 || index > this.size){
//             console.log("invalid");
//             return
//         }
//         if(index == 0){
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for(let i = 0;i < index-1; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }
//     remove(index) {
//         if(index < 0 || index >= this.size){
//             return 
//         }        
//         let removeNode;
//         if(index == 0){
//             removeNode = this.head
//             this.head = removeNode.next
//         } else {
//             let prev = this.head
//             for(let i = 0; i < index - 1; i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next
//             prev.next = removeNode.next            
//         }
//         this.size--
//         console.log(removeNode.value); 
//     }
//     removeValue(value) {
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while(prev.next && prev.next.value !== value){
//                 prev = prev.next
//             }
//             if(prev.next) {
//                 const removeNode = prev.next
//                 prev.next = removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }

//     }
//     search(value) {
//         if(this.isEmpty()) {
//             return -1
//         } else {
//             let curr = this.head
//             let i = 0
//             while(curr) {
//                 if(curr.value === value) {
//                     return i
//                 }
//                 curr = curr.next
//                 i++
//             }
//             return -1
//         }
//     }
//     print() {
//         if(this.isEmpty()){
//             console.log("List is Empty");
//         } else {
//             let curr = this.head
//             let listValues = ""
//             while(curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList()
// console.log("List is Empty ", list.isEmpty());
// console.log("List Size ",list.getSize());
// list.print()
// list.insert(10, 0)
// list.print()
// list.insert(20,0)
// list.print()
// list.insert(30,1)
// list.print()
// list.append(40)
// list.append(40)
// list.print()
// console.log(list.search(60));


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    insert(value,index) {
        const node = new Node(value)
        if(index < 0 || index > this.size){
            return
        }
        if(index == 0){
            if(this.size === 0){
                this.head = node
            } else {
                node.next = this.head
                this.head = node
            }    
            this.size++
        } else {
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next  = prev.next
            prev.next = node
            this.size++
        }
    }
    append(value) {
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    remove(value) {
        if (this.size === 0) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next) {
                prev.next = prev.next.next
                this.size-- 
                return value
            } else {
                return null
            }
        }
    }
    removeIndex(index) {
        if (index < 0 || index >= this.size) {
            return 
        } 
        if (index === 0){
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            prev.next = prev.next.next
        }
        this.size--
    }
    search (value) {
        if(this.size === 0){
            return 
        } else {
            let i=0;
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    return i
                }else {
                    curr=curr.next
                    i++
                }
            }
            return "Onnumilla"
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
        if(this.size === 0){
            console.log("List is empty");
        } else {
            let prev = this.head
            let listValues = ""
            while(prev){
                listValues += `${prev.value} `
                prev = prev.next
            }
            console.log(listValues);
        }
    }
}
const list = new LinkedList()
list.insert(10,0)
list.print()
list.insert(20,1)
list.print()
list.insert(30,1)
list.print()
list.append(40)
list.print()
list.reverse()
list.print()




