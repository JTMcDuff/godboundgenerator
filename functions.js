// genRand returns a random number from 1 to num
function genRand(num) {
	    return Math.floor(Math.random() * (num)) + 1;
}

// Does all the work necessary to generate a court.  Returns an array that is rendered in order by renderResult.
function genCourt() {
	//First, generate the number for court structure
	let crtStruct = genRand(6);
	return [crtStruct];
}

// Accepts an array and renders its elements in order to the result div.
function renderResult(result) {
	console.log(result);
	//iterate through result
	result.forEach( (item)=> {
		item = '<p>' + item + '</p>';
		$("#results").append(item);
	});
}