// Search

const arr = [1,2,3]


// Linear search

const linearSearch = (arr, n) => {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] == n) {
      console.log('Found in array')
      return true
    }
  }
  console.log('Not found in array')
  return false
}

linearSearch(arr, 3)


const linearSearch2 = (arr, n) => {
  for(el in arr){
    if(el == n){
      console.log('Found in array')
      return true
    }
  }
  console.log('Not found in array')
  return false
}

linearSearch2(arr, 4)
