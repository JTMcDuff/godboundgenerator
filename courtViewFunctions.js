// courtViewFunctions holds all functions for adding content for courts.

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