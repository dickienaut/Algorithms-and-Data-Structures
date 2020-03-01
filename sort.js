const arr = [1,3,2,4,5,4,6,7,6,7,8,9,0]

const swap = (arr, index1, index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const bubbleSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j <= i; j++) {
      if(arr[i] < arr[j]) {
        swap(arr, i, j)
        console.log(`Swapping i: ${arr[i]} j: ${arr[j]}`)
      }
    }
  }
  console.log('Final sort')
  console.log(arr)
}

// bubbleSort(arr)
