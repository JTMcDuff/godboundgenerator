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
const courtTypes = {
	1: 'Aristocratic',
	2: 'Bureaucratic',
	3: 'Business',
	4: 'Community',
	5: 'Criminal'
};

const courts = {
	'Aristocratic': {
		'firstChart': {
			1: 'Mood: Beauty-loving, with exquisite art and architecture',
			2: 'Mood: Bluff and familiar, with easy access to nobility',
			3: 'Mood: Bracing for an expected clash or change of rulers',
			4: 'Mood: Confused, with a welter of plots and counterplots',
			5: 'Mood: Corrupt, where everything takes cash or favors to do',
			6: 'Mood: Decadent, obsessed with exotic pleasures',
			7: 'Mood: Decaying, hidebound by rules no longer understood',
			8: 'Mood: Delusional, convinced of a false situation in the world',
			9: 'Mood: Paranoid, with everyone suspected of treachery',
			10: 'Mood: Rigidly formal with elaborately protocols enforced',
			11: 'Mood: Vibrant with activity and bold ambition',
			12: 'Mood: Xenophilic, eager for foreign fashions and visitors'
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
	'Bureaucratic': {
				'firstChart': {
			1: 'The bureaucracy is admired for its probity and efficiency at its work',
			2: 'The bureaucracy is aristocratic, a refuge for excess noble offspring.',
			3: 'The bureaucracy is autocratic, the real power behind a puppet ruler.',
			4: 'The bureaucracy is regarded contemptuously, as a pack of incompetent obstacles',
			5: 'The bureaucracy is corrupt, willing to do anything for a little silver',
			6: 'The bureaucracy is dangerous, where political losers tend to die young.',
			7: 'The bureaucracy is hidebound, in opposition to all new things of any kind.',
			8: 'The bureaucracy is irrelevant, with the real administration lying elsewhere',
			9: 'The bureaucracy is novel, being new to the area or full of new methods.',
			10: 'The bureaucracy is pious, largely an outgrowth of the local majority faith.',
			11: 'The bureaucracy is reverenced, as cultured elite due honor and respect.',
			12: 'The bureaucracy is self-interested, only concerned with its own power.'
		},
		'Major Actor': {
			1: '"Retired” kingmaker',
			2: 'Chief justice',
			3: 'Chief spymaster',
			4: 'Head of tax collection',
			5: 'Head of the police',
			6: 'Minister of Agriculture',
			7: 'Minister of Foreign Affairs',
			8: 'Minister of Internal Affairs',
			9: 'Minister of Temples',
			10:'Minister of Trade',
			11:'Minister of War',
			12:'Secretary of a great minister'
		},
		'Minor Actor': {
			1: 'Ambitious young clerk',
			2: 'An official’s favorite lover',
			3: 'Clerk who spies for a rival official',
			4: 'Crony capitalist business owner',
			5: 'Cynical clerk seducing their way up',
			6: 'Desperately confused petitioner',
			7: 'Distracted record archivist',
			8: 'Hapless tax debtor doing “favors”',
			9: 'Litigant seeking to bribe someone',
			10:'Official demoted for his sins',
			11:'Smuggler dodging tariffs',
			12:'Wizened old clerk who knows all'
		},
		'Power Sources': {
			1: 'Numerous important locals owe them big favors',
			2: 'Only they actually know how to operate the bureau',
			3: 'Their peers in the bureau all admire and like them',
			4: 'Their police ties give them legal carte blanche for much',
			5: 'They have access to relevant state secrets',
			6: 'They have blackmail material on their superiors',
			7: 'They have limited but very useful legislative power',
			8: 'They have powerful business ties they can exploit',
			9: 'They have the means and allies to assassinate people',
			10:'They have ties to powerful local criminal groups',
			11:'They’re deeply loved by the local ruler for their skills',
			12:'They’re very personally wealthy or from a rich family'
		},
		'Conflicts': {
			1: 'A noble’s trying to muscle the bureau',
			2: 'A reformer wants to kick someone out',
			3: 'A usurper seeks someone’s position',
			4: 'Somebody’s embezzling state funds',
			5: 'Someone’s a spy for another bureau',
			6: 'Someone’s an agent of a foreign state',
			7: 'The bureau is too rich for its own good',
			8: 'The bureau’s critically underfunded',
			9: 'The bureau’s job just got terribly hard',
			10:'The bureau’s missing taxes or fees due',
			11:'The bureau’s riddled with corruption',
			12:'The ruler is upset with the bureau'
		}, 
		'Consequences': {
			1: 'A critical project would fail with much suffering',
			2: 'A now-unfettered rival would seize much power',
			3: 'A rival bureaucracy would gain their portfolio',
			4: 'A vital government function would cease',
			5: 'An enemy nation would take advantage of it',
			6: 'An incompetent noble would take over, badly',
			7: 'Complete administrative paralysis of the nation',
			8: 'Criminal powers would fill the vacuum',
			9: 'Government secrets would scatter with clerks',
			10:'It would enrage the ruler or other bureaucrats',
			11:'Oppressed peasants would chance a revolt',
			12:'Unrelated services would worsen as focus shifts'
		},
		'Court Defenses': {
			1: 'A mighty wizard in their debt',
			2: 'Confiscated magical artifacts',
			3: 'Contingent of well-trained police',
			4: 'Deal with a supernatural protector',
			5: 'Decentralized offices of import',
			6: 'Detachments of regular soldiers',
			7: 'Guardian sorcerers for the office',
			8: 'Heavily-armed tax enforcers',
			9: 'Not all clerks are human',
			10:'Operatives from the espionage arm',
			11:'Sheer numbers of clerks',
			12:'Venerable fixed wards'
		}
	},
	'Business': {},
	'Community': {},
	'Criminal': {
				'Regard': {
			1: '',
			2: '',
			3: '',
			4: '',
			5: '',
			6: '',
			7: '',
			8: '',
			9: '',
			10: '',
			11: '',
			12: ''
		},
		'Major Actor': {
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
		'Minor Actor': {
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
		'Power Sources': {
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
		'Conflicts': {
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
		'Consequences': {
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
		'Court Defenses': {
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
		}
	}
};