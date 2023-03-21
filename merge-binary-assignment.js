//Question 1
//Given an array of unsorted numbers, return the index of the following target
// if the target exists in the array. If the target is not found, return null

function merge(left, right) {

    let sortednum = [] 
    while (left.length && right.length) {
      
      if (left[0] < right[0]) {
        sortednum.push(left.shift())
      } else {
        sortednum.push(right.shift())
      }
    }
    
    return [...sortednum, ...left, ...right]
  }

  function mergeSort(num) {
    let middle = Math.floor(num.length / 2)

    if (num.length < 2){
         return num
    }
    
    let left = mergeSort(num.slice(0, middle))
    let right = mergeSort(num.slice(middle))
    return merge(left, right)
  }
  let num = [45,12,6,89,2,5]
  //console.log(mergeSort(num))


  function binary(arr,target){
    let left=0;
    let right=arr.length -1;


while(left <= right){

let middle=Math.floor((left +right)/2);

    if(arr[middle]===target){
        return middle;
    }
    else if(arr[middle]>target){
        right= middle -1
    }
    else{
        left=middle +1
    }

}
return null

}
let target= 6;
console.log(num.indexOf(6));

//Question 2
//Given an unsorted array of numbers return the sorted array in descending order


function mergeSort(num2) {

  if (num2.length <= 1){
       return num2;
  }
  let middle = Math.floor(num2.length / 2)
  let left = mergeSort(num2.slice(0, middle))
  let right = mergeSort(num2.slice(middle))
  return merge(left, right)
}

function merge(left, right) {

  let sortednum2 = [] 
  let left1=0;
  let right1=0;
  while (left1 < left.length  && right1 < right.length) {
    
    if (left[left1] < right[right1]) {

      sortednum2.push(left[left1]);
      left1++;

    } 
    else {
      sortednum2.push(right[right1]);
      right1++;
    }
  }
  
  return sortednum2.concat(left.slice(left1)).concat(right.slice(right1));
}

let num2 = [123,89,5,23,9,56]

console.log(mergeSort(num2))


  //Question 3
  //Given the following array, search for the following target

function merge(left, right) {

    let sortednum2 = [] 
    while (left.length && right.length) {
      
      if (left[0] < right[0]) {
        sortednum2.push(left.shift())
      } else {
        sortednum2.push(right.shift())
      }
    }
    
    return [...sortednum2, ...left, ...right]
  }

  function mergeSort(arr) {
    let middle = Math.floor(arr.length / 2)

    if (arr.length < 2){
         return arr
    }
    
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left, right)
  }
  let arr = [1,4,78,2,67,3];
  


  function binary(arr,target2){
    let left=0;
    let right=arr.length -1;


while(left <= right){

let middle=Math.floor((left +right)/2);

    if(arr[middle]===target2){
        return middle;
    }
    else if(arr[middle]>target2){
        right= middle -1
    }
    else{
        left=middle +1
    }

}
return -1

}
let target2= 34;
console.log(binary(arr,target2));
