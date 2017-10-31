// genRand returns a random number from 1 to num
function genRand(num) {
	    return Math.floor(Math.random() * (num)) + 1;
}

// Does all the work necessary to generate a court.
// Fires renderResult to add it to the index.html.
function genCourt(type) {
	// Generate the numbers for court structure and type
	const crtStruct = genRand(6)
	let courtType;
	
	// If selector was random, generate random type, otherwise use the type.
	type === 'rand' ?  courtType = courtTypes[ genRand(5) ] : courtType = courtTypes [Number(type) ];

    // Generates our major actors.
	//const majorActors = genMajorActors(3);

	// Reference the appropriate objects for detailing the structure.
	const court = [ `Court Type: ${ courtType }`,
		`Court Power structure: ${ courtStructure[crtStruct] }`,
		`Court Status: ${ courts[ courtType ][ 'firstChart' ][ genRand(12) ] }`
	];

	// Append to index.
	renderResult(court);
}

// Accepts an array and renders its elements in order to the result div.
function renderResult(result) {
	//  Append a correctly numbered div to results, then increment resultNumber
	$("#results").append("<div id=" + resultNumber + "></div>");

	// Render each item into the new div.
	result.forEach( (item)=> {
		item = '<p>' + item + '</p>';
		$(`#${resultNumber}`).append(item);
	});

	// Increment resultNumber for future references.
	resultNumber++;
}