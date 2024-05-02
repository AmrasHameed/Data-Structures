// function linearSearch(arr,t) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === t) {
//             return i
//         } 
//     }
//     return -1
// }


// console.log(linearSearch(arr, t));

// function binarySearch(arr ,t) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
//     while(leftIndex <= rightIndex) {
//         let mid = Math.floor((leftIndex + rightIndex) / 2)
//         if(t == arr[mid]) {
//             return mid
//         }
//         if(t < arr[mid]) {
//             rightIndex = mid - 1
//         } else {
//             leftIndex = mid + 1
//         }
//     }
//     return -1
// }



// function binarySearch(arr, t) {
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         if(t === arr[mid]) {
//             return mid
//         }
//         if(t < arr[mid]) {
//             right = mid - 1
//         } else {
//             left = mid + 1
//         }
//     }
//     return -1
// }
// let arr = [-5, 2, 4, 6, 10]
// t = 2
// console.log(binarySearch(arr, t));