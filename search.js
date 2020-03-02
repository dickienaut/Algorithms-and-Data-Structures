// Search

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,20]


// Linear search O(n)

const linearSearch = (arr, n) => {
  console.log('Linear Search')
  for(let i=0; i<arr.length; i++) {
    if(arr[i] == n) {
      console.log('Found in array')
      return true
    }
  }
  console.log('Not found in array')
  return false
}

// linearSearch(arr, 3)


// Binary Search O(log n)

const binarySearch = (arr, n) => {
  console.log('Binary Search')
  arr.sort(function(a,b) {
  return (+a) - (+b);
  })
  let lowIndex = 0, highIndex = arr.length - 1, midIndex
  while(lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex)/2)
    const consl = console.log('low:', lowIndex, 'mid:', midIndex, 'high:', highIndex)
    consl
    if(n == arr[midIndex]) {
      console.log('Found it:', arr[midIndex], n)
      return
    } else if(n > arr[midIndex]) {
      lowIndex = midIndex + 1
    } else {
      highIndex = midIndex - 1
    }
  }
  console.log('Not found')
  return -1
}

// binarySearch(arr, 2)


const binarySearch2 = (arr, n) => {
  console.log('Binary Search')
  arr.sort((a, b) => {
    return (+a) - (+b)
  })
  let lowIndex = 0, highIndex = arr.length -1, midIndex
  while(lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2)
    if(n == arr[midIndex]) {
      console.log('Found it', n, arr[midIndex])
      return true
    } else if(n > arr[midIndex]) {
      lowIndex = midIndex + 1
    } else {
      highIndex = midIndex - 1
    }
  }
  console.log('Not found in array')
  return -1
}

binarySearch2(arr, 0)
