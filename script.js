function threeSum(arr, target) {
// write your code here
   const n = arr.length;
  arr.sort((a, b) => a - b);
  const targetSums = [];
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const threeSum = arr[i] + arr[left] + arr[right];
      if (threeSum === target) {
        targetSums.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (threeSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return targetSums;
}

module.exports = threeSum;
