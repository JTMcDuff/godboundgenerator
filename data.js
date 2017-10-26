/* Stores the objects with the text necessary for generating the various charts.
   Currently a JS file because a DB is kinda overkill for this.
*/

const courtStructure = {
	1: 'Autocratic. One person has largely unchallenged control over the court.',
	2: 'Figurehead. A public leader is actually controlled by one or more hidden figures.',
	3: 'Shared. Two or more figures share ultimate decision-making authority, either officially or de facto.',
	4: 'Consensus. The court makes decisions by consensus, with everyone needing to mostly-agree.',
	5: 'Democratic. The court makes decisions by majority rule, either directly or through a leader who requires it.',
	6: 'Anarchic. Authority is fragmented or currently unsettled, and no one is sure of their power.'
};