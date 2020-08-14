function array_checking(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		for(var j = i; j < arr1.length; j++) {
			var result = true;
			temp = arr1[i];
			arr1[i] = arr1[j];
			arr1[j] = temp;
			for(var k = 0; k < arr1.length; k++) {
				if(arr1[k] !== arr2[k]) {
					result = false;
					break;
				}
			}

			if(result) {
				return true;
			}

			arr1[j] = arr1[i];
			arr1[i] = temp;
		}
	}

	return false;
}

console.log(array_checking([10,20,30], [10,20,30]));
console.log(array_checking([10,20,30], [30,10,20]));
console.log(array_checking([10,20,30,40], [10,30,20,40]));



