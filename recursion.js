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