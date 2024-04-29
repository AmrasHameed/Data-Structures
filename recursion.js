// reverse a string 

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
//     console.log(n);
//     let num = n - 1
//     if(num > 0){
//         countDown(num)
//     }
// }
// countDown(10);

// function countDown(n){
//     if(n == 1){
//         return 1
//     }
//     return n + countDown(n-1)
// }
// console.log(countDown(10));

// function fib(n){
//     if(n<2){
//         return n
//     }
//     return fib(n-2)+fib(n-1)
// }
// console.log(fib(5));

function fn(n){
    if(n<=1){
        return 
    }
    fn(n-1)
    console.log(n);
    fn(n-1)
}
fn(5)