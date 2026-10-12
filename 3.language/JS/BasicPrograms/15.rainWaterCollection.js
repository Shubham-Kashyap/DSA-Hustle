function maxArea(height) {
    let maxArea = 0;
    let [right, left] = [height.length - 1, 0]

    while (left !== right) {
        const length = Math.min(height[left], height[right]);
        const width = right - left;
        const calculatedArea = area(length, width)
        if (calculatedArea > maxArea) maxArea = calculatedArea;
        height[left] < height[right] ? left++ : right--;
    }
    return maxArea;

};

function area(length, width) {
    return length * width
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1
console.log(maxArea([4, 3, 2, 1, 4])) // 16
console.log(maxArea([1, 2, 1])) // 2
console.log(maxArea([1, 2, 4, 3])) // 4