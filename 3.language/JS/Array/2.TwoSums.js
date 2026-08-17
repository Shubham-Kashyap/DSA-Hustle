/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

function twoSum(nums, target) {
  const arr = [];
  for (const [i, v] of nums.entries()) {
    const differenceToLookup = target - v;
    const lookupArray = nums;
    // console.log({
    //     target,
    //     currentIndex: i,
    //     currentValue: v,
    //     differenceLookup: Math.abs(v-target),
    //     originalArray: nums,
    //     lookupArray: nums,
    //     foundInLookupArray: nums.lastIndexOf(Math.abs(v-target)),
    //     equalToCurrentIndex: i=== this.foundInLookupArray,
    //     foundAtGraterIndex: this.foundInLookupArray > this.currentIndex
    // })
    const foundInLookupArray = lookupArray.lastIndexOf(differenceToLookup);
    if (foundInLookupArray !== -1 && foundInLookupArray > i)
      arr.push(i, foundInLookupArray);
  }
  return arr;
}

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
