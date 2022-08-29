const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    arr = [n1 ,n2 ,n3]
    max = arr[0] > arr[1] ? ( (arr[0] > arr[2]) ? arr[0] : arr[2] ) : (arr[1] > arr[2]) ? arr[1] : arr[2] 
    min = arr[0] < arr[1] ? ( (arr[0] < arr[2]) ? arr[0] : arr[2] ) : (arr[1] < arr[2]) ? arr[1] : arr[2] 
    for (num of arr) {
        if (num != max && num != min) {
            mid = Number(num)
        }
    }
    return {min : min,
            mid : mid,
            max : max}
  }
module.exports = minMedMax
