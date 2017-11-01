// genRand returns a random number from 1 to num
function genRand(num) {
	    return Math.floor(Math.random() * (num)) + 1;
}

// Does all the work necessary to generate a court.
// Fires renderResult to add it to the index.html.
function genCourt(type) {
	let courtType;
	
	// If selector was random, generate random type, otherwise use the type.
	type === 'rand' ?  courtType = courtTypes[ genRand(5) ] : courtType = courtTypes [Number(type) ];

    // Generates our major actors.
	const majorActors = genMajorActors(courtType, 3);

	// Reference the appropriate objects for detailing the structure.
	let court = {
		'type': courtType,
		'power structure': courtStructure[ genRand(6) ],
		'court status': courts[ courtType ][ 'firstChart' ][ genRand(12) ],
		'major actors': majorActors
	};

	// Fire rendercourt
	renderCourt(court);
}

// Accepts a court object and renders its elements in order to the result div.
function renderCourt(court) {
	//  Append a correctly numbered div to results, then increment resultNumber
	$("#results").append("<div id=" + resultNumber + "></div>");

	// Render each item into the new div.
	$(`#${resultNumber}`).append(`<p class="courttype">Court Type: ${ court[ 'type' ] } </p>`);
	$(`#${resultNumber}`).append(`<p class="powerstructure">Power Structure: ${ court[ 'power Structure' ] }</p>`);
	
	// Create a separate div for the actors
	$(`#${resultNumber}`).append(`<div class="actors${resultNumber}">Major Actors</div>`);

	//Iterate through the major actors, rendering them and their power sources.
	court['major actors'].forEach( (actor)=> {
			$(`.actors${resultNumber}`).append(`<p class="majoractor">Major Actor: ${ actor[0] }  Power Source:  ${ actor[1] } </p>`);
	})


	// Increment resultNumber for future references.
	resultNumber++;
}

// Accepts a court type and a number.  Returns an array of tuples, each containing an actor and a power source.
function genMajorActors(courtType, number) {
  let results = [];
  for ( let i = 0; i < number; i ++ ) {
  	results.push( [ `${ courts[ courtType ][ 'Major Actor' ][ genRand(12) ] }`, `${ courts[ courtType ][ 'Power Sources' ][ genRand(12) ] }` ] );
  };

  return results;
}

