function findMedianSortedArrays(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    //merge the array 
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b)
    const o = mergedArray.length

    console.log({
        mergedArray,
        even: {
            isEven: !Boolean(mergedArray.length % 2),
            median: (mergedArray[Math.floor(o / 2) - 1] + mergedArray[Math.floor(o / 2)]) / 2
        },
        odd: {
            isOdd: Boolean(mergedArray.length % 2),
            median: mergedArray[mergedArray.length / 2]
        }
    })
    // get median 
    // if length is even
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[Math.floor(o / 2) - 1] + mergedArray[Math.floor(o / 2)]) / 2
    }

    // length is odd
    return mergedArray[Math.floor(o / 2)]

};

console.log(findMedianSortedArrays([], []))