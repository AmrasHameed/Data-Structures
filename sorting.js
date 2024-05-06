// function bubbleSort(arr) {
//     let swap ;
//     do {
//         swap = false
//         for(let i = 0; i < arr.length - 1; i++) {
//             if(arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//                 swap = true
//             }
//         }
//     } while (swap)
//     return arr
// }



// function bubbleSort(arr){
//     swapped = false;
//     for(let i = 0; i < arr.length -1;i++){
//         if(arr[i] > arr[i+1]){
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//             swapped = true
//         }
//     }
//     if(!swapped){
//         return arr;
//     } else {
//         return bubbleSort(arr)
//     }
// }

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1 ; i++) {
//         for (let j = i+1; j < arr.length ; j++) {
//             if(arr[j] < arr[i]){
//                 [arr[j], arr[i]] = [arr[i], arr[j]]
//             }
//         }
//     }
// }

// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let numberToInsert = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > numberToInsert) {
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = numberToInsert
//     }
// }


// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let num = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > num) {
//             arr[j + 1] = arr[j]
//             j = j-1
//         }
//         arr[j + 1] = num
//     }
// }



// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let num = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > num) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         } 
//         arr[j + 1] = num
//     }
// }

// function bubbleSort(arr) {
//     let swap = false;
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] < arr[i + 1]) {
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//             swap = true
//         }
//     }
//     if(!swap) {
//         return arr
//     } else {
//         return bubbleSort(arr)
//     }
// }

let arr = [5, -2, 8, -1, 9, 3, -7, 4, 10, -6]
bubbleSort(arr);
console.log(arr);