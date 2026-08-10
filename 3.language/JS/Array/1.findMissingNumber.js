/**
 * Find missing element from a array 
 * assuming array has consecutive sereies in un-arranged order
 */

const arr = [3,4,5,1,6,7,8]
function findMissingElementInArray(arr=[]){
    const actualTotalSum = arr.reduce((acc,curr)=>acc+curr,0)
    const expectedTotalSum = arr.length*(arr.length+1)/2
    return expectedTotalSum-actualTotalSum
}


console.log(findMissingElementInArray(arr))