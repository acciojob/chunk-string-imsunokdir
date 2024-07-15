function stringChop(str, size) {
  // your code here
	if(str.length == ""){
		return []
	}
	let newArr = []
	for(let i=0;i<str.length;i+=size){
		newArr.push(str.slice(i,i+size))
	}
	return newArr
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, Number(size))));
