// function fn(n){
//     let sum=(n*(n+1)/2)**2
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
        
let arr=[6,6,1,6,5,4,3,6,6,9,8,0,6,6,6,6]
target=6;


for (let i = 0, j = arr.length - 1; i < j;) {
    if (arr[i] === target && arr[j] !== target) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        i++;
        j--;
    } else {
        if (arr[i] !== target) i++;
        if (arr[j] === target) j--;
    }
}

console.log(arr);

