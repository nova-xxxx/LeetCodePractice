// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @author: xxxx_4
 * @date: 2019-11-08
 */

/**
 * 解法一：暴力循环, 不管三七二十一，来两层循环解决
 */

function getFactorIndex1(nums, target) {
    for (var i = 0; i<= nums.length; i++) {
        const firstFactor = nums[i];
        for(var j = i + 1; j<=nums.length; j++) {
            const secondFactor = nums[j];
            if (firstFactor + secondFactor === target) {
                return [i,j];
            }
        }
    }
    return [];
}

/**
 * 解法二：用findIndex代替for循环
 */

function getFactorIndex3(nums, target) {
    for(var i = 0; i <= nums.length;i++){
        const firstFactor = nums[i];
        const secondFactorIndex = nums.findIndex(num => num === target - firstFactor);
        if (secondFactorIndex !== i && secondFactorIndex > -1) {
            return [i, secondFactorIndex];
        }
    }
    return [];
}


/**
 *
 * 解法三：用map
 * @param {*} nums
 * @param {*} target
 */
function getFactorIndex4(nums, target) {
    const map = new Map();
    for(var i = 0; i <= nums.length; i++) {
        const firstFactor = nums[i];
        const secondFactor = target - firstFactor;
        if (map.has(secondFactor) && map.get(secondFactor) !== i) {
            return [i, map.get(secondFactor)];
        }
        map.set(nums[i], i);
    }
    return [];
}
