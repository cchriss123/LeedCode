

console.log(twoSum([2,7,11,15], 9)); // [0, 1]


function twoSum(nums: number[], target: number): number[] {
    const diffIndex = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in diffIndex) {
            return [diffIndex[nums[i]], i];
        }
        diffIndex[target - nums[i]] = i;
        
    }
    return [];
}
