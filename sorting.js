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



// function insertionSort(arr, i = arr.length) {
//     if(i <= 1) {
//         return
//     }
//     insertionSort(arr, i - 1)
//     let num = arr[i - 1]
//     let j = i - 2
//     while(j >= 0 && arr[j] > num) {
//         arr[j + 1] = arr[j]
//         j = j - 1
//     } 
//     arr[j + 1] = num
// }



// function insertionSort(arr, i = arr.length) {
//     if(i <= 0) {
//         return 
//     }
//     insertionSort(arr, i - 1)
//     let num = arr[i - 1]
//     let j = i - 2
//     while(j >= 0 && arr[j] > num) {
//         arr[j + 1] = arr[j]
//         j--
//     }
//     arr[j + 1] = num
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


// function selectionSort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
// }


// function quickSort(arr) {
//     if(arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// function quickSort(arr) {
//     if(arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
    const sortedArr = []
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}
let arr = [5, -2, 8, -1, 9, 3, -7, 4, 10, -6]
console.log(mergeSort(arr));