function miniMaxSum(arr) {
    let sortedArray = arr.sort((a, b) => a-b)
    let max = 0;
    let min = 0;
    for(let i = 0; i < sortedArray.length -1; i++){
        min+=sortedArray[i]
    }
    for(let i = 1; i <sortedArray.length; i++){
        max+=sortedArray[i]
    }
    return `${min} ${max}`
}
console.log(miniMaxSum([1, 2, 3, 4, 5]))