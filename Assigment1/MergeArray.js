function merge(a, b) {
let n = a.length;
let m = b.length;
let j = n - 1;
let i = n - 1;

for (i = n-1; i >= 0 ; i--) {
if (a[i] !== -1) {
a[j] = a[i];
j--;
}
}
let k = 0
i = m;
j = 0;
while(k < n) {
if (a[i] <= b[j]) {
a[k] = a[i];
i++;
k++;
} else {
a[k] = b[j];
j++;
k++;
}
if (i === n) {
for (x = j; x < m;x++) {
a[k] = b[x];
k++;
}
break;
}
if (j === m) {
for (x = i; x < n;x++) {
a[k] = a[x];
k++;
}
break;
}
}
for (i = 0;i < n;i++) {
console.log(a[i]);
}
}

const a = [2, 8, -1, -1, -1, 13, -1, 15, 20];
const b = [5,7,9,14]
merge(a,b);



// 2nd example

var arr1 = [2, 10, 20, 30, 100];
var arr2 = [2, 4, 5, 6, 7, 8, 9];
var j = 0;
var i = 0;
var newArray = [];

for(var x=0; x< (arr1.length + arr2.length);x++) {
	if(arr1[i] >= arr2[j]) {
		newArray.push(arr2[j]);
		j++
	} else if(arr1[i] < arr2[j]) {
		newArray.push(arr1[i]);   //check if element arr1 index value  is less than arr2 element
		i++;
	}
	else if(i == arr1.length || j < arr2.length) {  // add remaining arr2 element
		newArray.push(arr2[j]);    
		j++;
	} else {
		newArray.push(arr1[i]);
	}

}

console.log(newArray);