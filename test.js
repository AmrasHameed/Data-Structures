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
    prepend(value) {
        const node = new Node(value)
        if(this.size == 0) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    sum() {
        if(this.size == 0) {
            console.log("List is empty");
            return
        } else {
            let sum = 0
            let curr = this.head
            while(curr) {
                sum+=curr.value
                curr = curr.next
            }
            console.log(sum);
        }
    }
    print() {
        if(this.size == 0) {
            console.log("List is empty");
            return
        } else {
            let curr = this.head
            let listValue = ""
            while(curr) {
                listValue+=`${curr.value} `
                curr = curr.next
            }
            console.log(listValue);
        }
    }
}

const list = new LinkedList

list.prepend(10)
list.prepend(11)
list.prepend(14)
list.prepend(15)
list.prepend(16)

list.print()
list.sum()