// class Heap {
//     constructor() {
//         this.heap = []
//     }
//     getparent(i) {
//         return Math.floor((i - 1) / 2)
//     }
//     getLeft(i) {
//         return (i * 2) + 1
//     }
//     getRight(i) {
//         return (i * 2) + 2
//     }
//     buildHeap(arr) {
//         this.heap = arr
//         for (let i = this.getparent(this.heap.length - 1); i >= 0; i--) {
//             this.heapifyDown(i)
//         }
//     }
//     insert(value) {
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length - 1)
//     }
//     swap(i1, i2) {
//         let temp = this.heap[i1]
//         this.heap[i1] = this.heap[i2]
//         this.heap[i2] = temp
//     }
//     heapifyUp(i) {
//         while (this.heap[i] < this.heap[this.getparent(i)]) {
//             this.swap(i, this.getparent(i))
//             i = this.getparent(i)
//         }
//     }
//     peek() {
//         return this.heap[0]
//     }
//     remove(){
//         if (this.heap.length == 0) {
//             return
//         }
//         const root = this.heap[0]
//         this.swap(0,this.heap.length-1)
//         this.heap.pop()
//         this.heapifyDown(0)
//         return root
//     }
//     heapifyDown(i) {
//         let endIndex = this.heap.length - 1
//         let leftIndex = this.getLeft(i)
//         let indexToShift;
//         while (leftIndex <= endIndex) {
//             let rightIndex = this.getRight(i)
//             if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]) {
//                 indexToShift = rightIndex
//             }
//             else {
//                 indexToShift = leftIndex
//             }
//             if (this.heap[i] > this.heap[indexToShift]) {
//                 this.swap(i, indexToShift)
//                 i = indexToShift
//                 leftIndex = this.getLeft(i)
//             }
//             else {
//                 return
//             }
//         }
//     }
//     getHeap() {
//         console.log(this.heap);
//     }
//     heapsort() {
//         let sorted = []
//         while (this.heap.length > 0) {
//             let elem = this.remove()
//             sorted.push(elem)
//         }
//         return sorted
//     }

// }

// const heap = new Heap()

// // let arr = [1, 8, 9, 3, 5, 2, 0]
// // heap.buildHeap(arr)
// // heap.insert(11)
// // heap.insert(82)
// // heap.insert(90)
// // heap.insert(43)
// // heap.insert(15)
// // heap.insert(4)
// // heap.insert(10)
// // heap.remove()
// // heap.getHeap()
// // console.log('sorted',heap.heapsort());

// function minHeapSort(arr){
//         for(var i=Math.floor(arr.length/2)-1;i>=0;i--){
//             minHeap(arr,arr.length,i)
//         }
    
//         function minHeap(arr,n,i){
//             let largest=i
//             let left=2*i+1
//             let right=2*i+2
    
//             if(left < n && arr[left] > arr[largest]){
//                 largest=left
//             }
    
//             if(right < n && arr[right] > arr[largest]){
//                 largest=right
//             }
//             if (largest !== i) {
//                 [arr[i], arr[largest]] = [arr[largest], arr[i]];
//                 minHeap(arr, n, largest);
//             }
//         }
//         for (let i = arr.length - 1; i > 0; i--) {
//             [arr[0], arr[i]] = [arr[i], arr[0]];
//             minHeap(arr, i, 0);
//         }
//         return arr;
//  }

// console.log(minHeapSort([1,4,97,99,2,0,40]));


class Heap {
    constructor() {
        this.heap = []
    }
    getParent(i) {
        return Math.floor((i - 1) / 2)
    }
    getLeft(i) {
        return (2 * i) + 1
    }
    getRight(i) {
        return (2 * i) + 2
    }
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }
    buildHeap(arr) {
        this.heap = arr
        for(let i = this.getParent(this.heap.length - 1); i >= 0; i--) {
            this.heapifyDown(i)
        }
    }
    heapifyDown(i) {
        let leftIndex = this.getLeft(i)
        let endIndex = this.heap.length - 1
        let indexToShift;
        while(leftIndex <= endIndex) {
            let rightIndex = this.getRight(i)
            if(rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex] ) {
                indexToShift = rightIndex
            } else {
                indexToShift = leftIndex
            }
            if(this.heap[i] > this.heap[indexToShift]) {
                this.swap(i, indexToShift) 
                i = indexToShift
                leftIndex = this.getLeft(i)
            } else {
                return
            }
        }
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(i) {
        while(this.heap[i] < this.heap[this.getParent(i)]) {
            this.swap(i, this.getParent(i))
            i = this.getParent(i)
        }
    }
    remove() {
        if(this.heap.length == 0) {
            return null
        }
        const root = this.heap[0]
        this.swap(0, this.heap.length - 1)
        this.heap.pop()
        this.heapifyDown(0)
        return root
    }
    heapSort() {
        let sorted = []
        while(this.heap.length > 0) {
            let val = this.remove()
            sorted.push(val)
        }
        return sorted
    }
    
}


// function heapSort(arr) {
//     for(let i = Math.floor(arr.length / 2) -1; i >= 0; i--) {
//         maxHeap(arr, arr.length, i)
//     }
//     function maxHeap(arr, n, i) {
//         let largest = i
//         let left = (2 * i) + 1
//         let right = (2 * i) + 2
//         if(left < n && arr[left] > arr[largest]) {
//             largest = left
//         }
//         if(right < n && arr[right] > arr[largest]) {
//             largest = right
//         }
//         if(largest !== i) {
//             [arr[i], arr[largest]] = [arr[largest], arr[i]]
//             maxHeap(arr, n, largest)
//         }
//     }
//     for(let i = arr.length - 1; i >= 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]]
//         maxHeap(arr, i, 0)
//     }
//     return arr
// }


function heapSort(arr) {
    for(let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        maxHeap(arr, arr.length, i)
    }
    function maxHeap(arr, n, i) {
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 2
        if(right < n && arr[right] > arr[largest]) {
            largest = right
        }
        if(left < n && arr[left] > arr[largest]) {
            largest = left
        }
        if(largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            maxHeap(arr, n, largest)
        }
    }
    for(let i = arr.length - 1; i >= 0 ; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        maxHeap(arr, i, 0)
    }
    return arr
}
// const heap = new Heap() 
// heap.buildHeap(arr)
// heap.insert(10)
// heap.insert(34)
// heap.insert(9)
// console.log(heap.heap);
// console.log(heap.remove())
// console.log(heap.remove())
// console.log(heap.heapSort())

let arr = [40, 50, 30, 33, 20, 11, 55, 0, 12, 24]
console.log(heapSort(arr))