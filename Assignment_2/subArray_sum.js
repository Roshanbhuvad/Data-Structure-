function findMaxAverage(nums, k) {
	var curr_max = 0;
	for(var i = 0; i < k; i++) {
		curr_max += nums[i];
	}

	var max_so_far = curr_max;

	for(var j = k; j < nums.length;j++) {
		curr_max += (nums[j] - nums[j - k]);
		// Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far
		max_so_far = Math.max(curr_max, max_so_far);
	}
	return max_so_far / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3],4));


//2nd example

var maxSubArray = function(nums) {
	let sum = 0;
	result = 0;
	for(let i = 0; i < nums.length; i++) {
		sum = Math.max(0, sum + nums[i]);
		result = Math.max(sum, result);
	}

	return result;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));



// 3rd example

let a = [4, 2, -3, -1, 0, 4]
let start = 0, end;
let answer = [];
for(start; start<a.length; start++) {
	let temp = [];
	let tempSum = 0;
	end = start;
	for(end; end <a.length; end++) {
		temp.push(a[end]);
		tempSum += a[end];
		if(tempSum === 0 ) {
			answer.push(temp);
			temp =[];
		}
	}
}

console.log(answer);


