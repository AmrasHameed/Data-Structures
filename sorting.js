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
//         return arr
//     }

// function bubbleSort(arr) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swap = true;
//       }
//     }
//   } while (swap);
//   return arr;
// }

// function insertionSort(arr) {
// for(let i = 1; i < arr.length; i++) {
//         let num = arr[i]
//     let j = i - 1
//     while(j >= 0 && arr[j] > num) {
//         arr[j + 1] = arr[j]
//         j = j-1
//     }
//     arr[j + 1] = num
// }
// return arr
// }

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let num = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > num) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = num;
//   }
//   return arr;
// }
// let arr = [5, -2, 8, -1, 9, 3, -7, 4, 10, -6];
// console.log(insertionSort(arr));

// function bubbleSort(arr) {
//     let swap = false;
//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] > arr[i + 1]) {
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
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     [arr[i], arr[min]] = [arr[min], arr[i]];
//   }
//   return arr;
// }
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     [arr[i], arr[min]] = [arr[min], arr[i]];
//   }
//   return arr
// }
// let arr = [5, -2, 8, -1, 9, 3, -7, 4, 10, -6]
// console.log(selectionSort(arr));

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
// let arr = [5, -2, 8, -1, 9, 3, -7, 4, 10, -6]
// console.log(quickSort(arr));















// function mergeSort(arr) {
//     if(arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let left  = arr.slice(0, mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }
// function merge(left, right) {
//     let sorted = []
//     while(left.length && right.length) {
//         if(left[0] <= right[0]) {
//             sorted.push(left.shift())
//         } else {
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted, ...left, ...right]
// }


// function mergeSort(arr) {
//     if(arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left, right) {
//     let sorted = []
//     while(left.length && right.length) {
//         if(left[0] > right[0]) {
//             sorted.push(right.shift())
//         } else {
//             sorted.push(left.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }


function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let sorted = []
    while(left.length && right.length) {
        if(left[0] > right[0]) {
            sorted.push(right.shift())
        } else {
            sorted.push(left.shift())
        }
    }
    return [...sorted,...left,...right]
}












let arr = [5, -2, 8, -1, 9, 3, -7, 4, 10, -6]
console.log(mergeSort(arr));
