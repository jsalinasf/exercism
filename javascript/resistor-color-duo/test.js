// arr=[1,2,5]	2	2 - Y=1;
// arr=[1,3,5,7,20]	1	1 - Y=12;
// arr=[-1]	0	0 - Y=0;

function greater(arr, Y) {
  return arr.filter((element) => element > Y).length;
}

console.log(greater([1, 2, 5], 1));
console.log(greater([1, 3, 5, 7, 20], 12));
console.log(greater([-1], 0));
