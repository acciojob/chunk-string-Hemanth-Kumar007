function stringChop(str, size) {
  // your code here
	let ans = [];
	let i=0;
	while(i<str.length-1){
		ans.push(str.slice(i,i+2));
		i = i+2;
	}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
