// function fn(n){
//     let sum=(n*(n+1)*(2*n+1)/6)
//     console.log(sum);
// }

// fn(3)
// function totalSum(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==10){
//                 return new Array(arr[i],arr[j])
//             }
//         }
//     }
// }
// console.log(totalSum(arr));

// function totalSum(arr,t){
//     let set = new Set();
//     for(let i=0;i<arr.length;i++){
//         let num =arr[i];
//         let match = t - num;
//         if (set.has(match)){
//             return [num, match]
//         }else{
//             set.add(num)
//         }
//     }
// }
// console.log(totalSum(arr,10));

// let arr="53547583265716474388";
// arr=arr.split('')
// let target=6
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0&&i%2==0){
//         for(let j=i;j<arr.length;j++){
//             if(arr[j]%2==0){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//             else{
//                 arr[i]=0
//             }
//         }
//     }else if(arr[i]%2==0&&i%2!=0){
//         for(let j=i;j<arr.length;j++){
//             if(arr[j]%2!=0){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//     }
// }

// push the target to end
// let arr = [6,2,3,6,4,3,6,1,66,9,6]
// let target=6

// for (let i = 0, j = arr.length - 1; i < j;) {
//     if (arr[i] === target) {
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//         j--;
//     } else {
//         i++
//     }
// }

// console.log(arr);

// function isPowerOfTwo(n) {
//     if(n < 1) {
//         return false
//     }
//     while(n > 1) {
//         if(n%2!==0) {
//             return false
//         }
//         n /= 2
//     }
//     return true
// }
// console.log(isPowerOfTwo(0));


// function factorial(n) {
//     if(n === 0) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(5))


// function fib(n) {
//     if(n < 2) {
//         return n
//     }
//     return fib(n - 1) + fib(n - 2)
// }
// console.log(fib(7))


// function find(arr,n) {
//     let left = 0;
//     let right = arr.length - 1;
//     while(right >= left) {
//         let mid = Math.floor((right+left)/2)
//         if(n===arr[mid]) {
//             return mid
//         }
//         if(n < arr[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
//     return -1
// } 

// console.log(find([-5,2,4,6,10],10))


let obj = {
    true:1,
    2:2,
    3:3
}

let arr = Object.keys(obj)

console.log(typeof arr[2])