

// Does all the work necessary to generate a court.
// Fires renderResult to add it to the index.html.
function genCourt(type) {
	let courtType;
	
	// If selector was random, generate random type, otherwise use the type.
	type === 'rand' ?  courtType = courtTypes[ genRand(5) ] : courtType = courtTypes [Number(type) ];

    // Generate major and minor actors
	const majorActors = genMajorActors(courtType, 3);
	const minorActors = genMinorActors(courtType, 3);

	// Generate conflicts as an array, passing the Actors as parameters for protagonists and antagonists
	const conflicts = genConflicts( courtType, majorActors, minorActors, 1);

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

	// renderActors function adds html table for actors.
	renderActors( court, resultNumber);
	//  Create actor table for inserting actors.
	

	// Increment resultNumber for future references.
	resultNumber++;
}

// Accepts the court and current resultNumber.  Generates and appends a table to the appropriate result div.
function renderActors( court, resultNumber ) {
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
}

//  Accepts a court and renders each conflict with an appropriate protagonist and antagonist
// Will add a minor actor if one is avc
function renderConflict(court, resultNumber ) {

}
// genMajorActors accept a court type and a number.   Returns an array of tuples, each containing an actor and a power source.
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
  	results.push( courts[ courtType ][ 'Minor Actor' ][ genRand(12) ] );
  }

  return results;
}

// Generates conflicts: returned in a multi-dimensional array with the following structure
// [  [ conflict, protagonist, antagonist, involved minorActor ] ]
function genConflicts( courtType, majorActors, minorActors, numConflicts) {
	// Results returned at end
	let results = [];
	let conflict = [];

	// cache lengths of Actors arrays.
	const majLen = majorActors.length;
	const minLen = minorActors.length;
	let protag = '';
	let antag = '';
	let minor = '';
	let index;

	//Use a new copy of the array since we are mutating it.
	majorActors = majorActors.slice();

	for ( let i = 0; i < numConflicts; i ++ ) {
		// choose a conflict.
		conflict = [ courts[ courtType ][ 'Conflicts' ][ genRand(12) ] ];

		// choose a protagonist
		// first find the correct index and assign that value to protag
		index = genRand( majLen ) - 1;

		// slice protag out of the array.
		protag = majorActors[ index ][0];
		majorActors.splice( index, 1 );

		// Generate antag, array is currently smaller
		index = genRand( majLen - 1 ) - 1 ;
		antag = majorActors[ index ][0];

		//Finally, add protag back onto majorActors
		majorActors.push(protag);

		// add them both to conflict.
		conflict.push( protag, antag );

		//Finally, choose a minor actor if we have one available and add to conflict.
		if ( minLen > 0 ) {
			minor = minorActors[ genRand(minLen) -1 ];
			conflict.push(minor);
		}

		// Add to results.
		results.push(conflict);
	}

	return results;
}