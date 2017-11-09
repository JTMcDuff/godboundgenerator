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

    // Generate major and minor actors
	const majorActors = genMajorActors(courtType, 3);
	const minorActors = genMinorActors(courtType, 3);


	// Reference the appropriate objects for detailing the structure.
	let court = {
		'type': courtType,
		'power structure': courtStructure[ genRand(6) ],
		'court status': courts[ courtType ][ 'firstChart' ][ genRand(12) ],
		'consequence': courts[ courtType ][ 'Consequences'][ genRand(12)],
		'major actors': majorActors,
		'minor actors': minorActors,
		// conflicts will eventually be selectable, so we are setting it up as an array now.
		'conflicts': [ courts[ courtType ][ 'Conflicts' ][ genRand(12) ] ],
		'defense': courts[ courtType ][ 'Court Defenses'][ genRand(12) ]
	};

	// Fire rendercourt
	renderCourt(court);
}

// Accepts a court object and renders its elements in order to the result div.
function renderCourt(court) {
	let row = '';

	//  Append a correctly numbered div to results, then increment resultNumber
	$("#results").append("<div id=" + resultNumber + "></div>");

	// Render each item into the new div.
	$(`#${resultNumber}`).append(`<p class="courttype">Court Type: ${ court[ 'type' ] } </p>`);
	$(`#${resultNumber}`).append(`<p class="powerstructure">Power Structure: ${ court[ 'power structure' ] }</p>`);
	$(`#${resultNumber}`).append(`<p class="consequences">Consequence of its Destruction: ${ court[ 'consequence' ] }</p>`);
	$(`#${resultNumber}`).append(`<p class="defenses">Court Defenses: ${ court[ 'defense' ] }</p>`);

	
	//  Create actor table for inserting actors.
	let actorTable = $(`<table class="actorstable ${resultNumber}">
		<tr>
		<th>Actor</th>
		<th>Type</th>
		<th>Power Source</th>
		</tr>
		</table>
		`);

	//Iterate through the major actors, inserting them into the actor table.
	court['major actors'].forEach( (actor)=> {
		row = $( `<tr>
			<td> ${ actor[0] } </td>
			<td> Major </td>
			<td> ${ actor[1] } </td>
			</tr>
		`);
		actorTable.append(row);
	});

	// Do the same for the minor actors.
	court['minor actors'].forEach( (actor)=> {
		row = $( `<tr>
			<td> ${ actor } </td>
			<td> Minor </td>
			<td> N/A </td>
			</tr>
		`);
		actorTable.append(row);
	});
	// Append the completed actorTable to our results.
	$(`#${resultNumber}`).append(actorTable);

	// Increment resultNumber for future references.
	resultNumber++;
}

// genMajorActors accept a court type and a number.   Returns an array of tuple, each containing an actor and a power source.
function genMajorActors(courtType, number) {
  let results = [];
  for ( let i = 0; i < number; i ++ ) {
  	results.push( [ `${ courts[ courtType ][ 'Major Actor' ][ genRand(12) ] }`, `${ courts[ courtType ][ 'Power Sources' ][ genRand(12) ] }` ] );
  }

  return results;
};
// genMinorActors accepts a court type and a number.  It returns a simple array, as minor actors lack a power source.
function genMinorActors(courtType, number) {
  let results = [];
  for ( let i = 0; i < number; i ++ ) {
  	results.push( `${ courts[ courtType ][ 'Minor Actor' ][ genRand(12) ] }` );
  }

  return results;
}
