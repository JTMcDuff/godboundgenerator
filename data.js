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

// courtType is exclusively used to associate a random number with a court.
// Court data is held in courts.
const courtType = {
	1: 'Aristocratic',
	2: 'Bureaucratic',
	3: 'Business',
	4: 'Community',
	5: 'Criminal'
};

const courts = {
	'Aristocratic': {
		'Moods': {
			1: 'Beauty-loving, with exquisite art and architecture',
			2: 'Bluff and familiar, with easy access to nobility',
			3: 'Bracing for an expected clash or change of rulers',
			4: 'Confused, with a welter of plots and counterplots',
			5: 'Corrupt, where everything takes cash or favors to do',
			6: 'Decadent, obsessed with exotic pleasures',
			7: 'Decaying, hidebound by rules no longer understood',
			8: 'Delusional, convinced of a false situation in the world',
			9: 'Paranoid, with everyone suspected of treachery',
			10: 'Rigidly formal with elaborately protocols enforced',
			11: 'Vibrant with activity and bold ambition',
			12: 'Xenophilic, eager for foreign fashions and visitors'
		},
		'Major Actor': {
			1: 'Court Sorcerer',
			2: 'Cunning Vizier',
			3: 'Discarded Former Favorite',
			4: 'Foreign Ambassador',
			5: 'Heir to rule',
			6: 'Honored General',
			7: 'Noble Clergy',
			8: 'Noble Family Matriarch',
			9: 'Ruler\'s Favorite Courtier',
			10:'Ruler\'s Spouse or Lover',
			11:'Titular ruler',
			12:'Treasurer'
		},
		'Minor Actor': {
			1: 'Amoral Sycophant',
			2: 'Commoner Petitioner',
			3: 'Court Musician',
			4: 'Disguised Spy',
			5: 'Disposable Plaything',
			6: 'Foreign Artist',
			7: 'Gossiping Servant',
			8: 'Grizzled Guardsman',
			9: 'Hired Assassin',
			10:'Ruler\'s Body-Servant',
			11:'Scheming Clerk',
			12:'Veteran Huntsman'
		},
		'Power Sources': {
			1: 'Has access to the state treasury',
			2: 'Has assassins and criminals in their employ',
			3: 'Has ties with powers in a neighboring state',
			4: 'Has vigorous backing from a local religion',
			5: 'Impeccable bloodline or legitimacy',
			6: 'Important figure is utterly smitten with them',
			7: 'Much loved by the common people',
			8: 'Numerous family ties with other nobles',
			9: 'Owns vast amount of personal wealth',
			10:'Possesses strong magic or exotic resources',
			11:'Spying and blackmail have armed them well',
			12:'Very influential with the military'
		},
		'Conflicts': {
			1: 'A favorite is being too indulged',
			2: 'A foolish policy is being enacted',
			3: 'A loan may or may not be repaid',
			4: 'A marriage is being forcibly pressured',
			5: 'A noble title is fought over',
			6: 'Dispute over the heir',
			7: 'Grudge over an old treachery',
			8: 'Land ownership is in question',
			9: 'Ownership of vital regalia is disputed',
			10:'Someone resents a lack of reward',
			11:'Someone\'s genealogy is challenged',
			12:'Someone\'s using dark sorcery'
		}, 
		'Consequences': {
			1: 'A civil struggle or civil war would break out',
			2: 'A much worse set of replacements are waiting',
			3: 'A neighboring court would be infuriated by it',
			4: 'A vital project would collapse disastrously',
			5: 'Actually, nothing particularly bad would happen',
			6: 'Hostile outsiders would seize the opportunity',
			7: 'Many locals would be furious at the disruption',
			8: 'No one else with any pretense of legitimacy',
			9: 'Only they know how to work the government',
			10:'Their lineage is needed to operate vital magic',
			11:'They represent the major elements of society',
			12:'They\'re holding back a dire threat to the society'
		},
		'Court Defenses': {
			1: 'A crew of bodyguard-magi',
			2: 'A magical defensive construct',
			3: 'A very capable sorcerer',
			4: 'An elite corps of human warriors',
			5: 'Buildings with dire traps',
			6: 'Extreme seclusion of the nobility',
			7: 'Lingering magical blessing',
			8: 'Magical guardian beast or beasts',
			9: 'Powerful empyrean wards',
			10:'Powerful personal defensive magic',
			11:'Swarms of trained guardsmen',
			12:'Vast mobs of devoted servants'
		}
	},
	'Bureaucratic': {},
	'Business': {},
	'Community': {},
	'Criminal': {
		'moods': {
			1: '',
			2: '',
			3: '',
			4: '',
			5: '',
			6: '',
			7: '',
			8: '',
			9: '',
			10:'',
			11:'',
			12:''
		},
		'Major Actor': {

		},
		'Minor Actor': {

		},
		'Power Sources': {

		},
		'Conflicts': {

		}, 
		'Consequences': {

		},
		'Court Defenses': {

		}
	}
};