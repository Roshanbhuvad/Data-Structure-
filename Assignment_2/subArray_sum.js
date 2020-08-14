function findMaxAverage(nums, k) {
	var curr_max = 0;
	for(var i = 0; i < k; i++) {
		curr_max += nums[i];
	}

	var max_so_far = curr_max;

	for(var j = k; j < nums.length;j++) {
		curr_max += (nums[j] - nums[j - k]);
		// Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far
		max_so_far = MATH.max(curr_max, max_so_far);
	}
	return max_so_far / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3],4))