// // reverse a string 

// function recursiveFibonacci(str,i){
//     if(str.length == i){
//         return  ""
//     }
//     return recursiveFibonacci(str,i+1) + str[i]
// }
// console.log(recursiveFibonacci("sarma",0));












// factorial of a number 

// function recursiveFactorial(n){
//     if(n === 0){
//         return 1 
//     }
//     return n * recursiveFactorial(n-1)
// }
// console.log(recursiveFactorial(5));












// number countdown 
// function countDown(n){
//     if(n - 1 >= 0){
//         countDown(n - 1)
//         console.log(n);
//     }
// }
// countDown(10);












// function countDown(n){
//     console.log(n);
//     if(n == 1){
//         return
//     }
//     return countDown(n-1)
// }
// countDown(1000);



// function fib(n){
//     if(n<2){
//         return n
//     }
//     return fib(n-2)+fib(n-1)
// }
// console.log(fib(5));

// function fn(n){
//     if(n<=1){
//         return 
//     }
//     fn(n-1)
//     console.log(n);
//     fn(n-1)
// }
// fn(5)

// function fn(str,i){
//     if(str.length==i){
//         return ""
//     }
//     return str[i]+fn(str,i+1) 
// }
// console.log(fn("amras hameed",0));

// function fib(n) {
//     if(n < 2) {
//         return n
//     }
//     return fib(n - 1) + fib(n - 2) 
// }

// fib(6);

// function reverse (str, i) {
//     if(str.length == i) {
//         return ""
//     }
//     return reverse(str, i+1) + str[i]
// }

// console.log(reverse("rezin", 0));

// function factorial(n) {
//     if(n === 1) {
//         return 1
//     }
//     return n * factorial(n -1)
// }
// console.log(factorial(5));

// function fin(n) {
//     if(n == 0) {
//         return n
//     }
//     fin(n-1)
//     console.log(n);
// }

// fin(100)





// let current = head;
// let prev = null;

// function rec(current) {
//     if (current === null) {
//         return prev;
//     } else {
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         return rec(next);
//     }
// }
// return rec(current);






// function binary(arr, t) {
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right) {
//         let mid = Math.floor((left+right)/2)
//         if(t === arr[mid]) {
//             return mid
//         }
//         if(t < arr[mid]) {
//             right = mid-1
//         } else {
//             left = mid+1
//         }
//     }
//     return -1
// }

// let arr = [2,4,6,8,10]
// t=8
// console.log(binary(arr,t));


let prev = null
let curr = head
function rec(curr) {
    if(curr === null) {
        return prev
    }
    let next = curr.next
    curr.next = prev
    prev = curr
    return rec(next)
}
return rec(curr)




class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print() {
        if(this.size == 0) {
            console.log("List is empty");
            return
        } else {
            let listValue =""
            let curr = this.head
            while(curr) {
                listValue+=`${curr.value}`
                curr = curr.next
            }
            console.log(listValue);
        }
    }
}
const list = new LinkedList()
list.print()
list.prepend(10)
list.print()