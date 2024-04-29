// let n = 10
// let arr = [0,1]
// for(let i = 2; i < n; i++){
//     arr[i] = arr[i - 1] + arr[i - 2]
// }
// console.log(arr);

// function factorial(n) {
//     let val = 1
//     for(let i = 2; i <= n; i++){
//         val *= i
//     }
//     return val
// }

// console.log(factorial(1));

// function prime(n){
//     if(n<2){
//         return false
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n%i == 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(prime(12)); 

// function isPowerOfTwo(n){
//     if(n < 1){
//         return false
//     }
//     while(n > 1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n /= 2;
//     }
//     return true
// }

function isPowerOfTwo(n) {
    if( n < 1) {
        return false;
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwo(5));