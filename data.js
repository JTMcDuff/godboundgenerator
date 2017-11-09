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
			'heading': 'Court Mood',
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
			'heading':'How is the Bureaucracy Regarded?',
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
	'Business': {		
		'firstChart': {
			'heading': 'How is the Business Currently Doing?',
			1: 'They’re teetering on the edge of bankruptcy.',
			2: 'It’s been a long, dry season of barely hanging on.',
			3: 'It’s a recent golden age of sudden, dramatic expansion.',
			4: 'It’s chasing itself in circles, without coherent direction.',
			5: 'It’s being threatened by a rival enterprise.',
			6: 'It’s made an enemy of the local officials somehow.',
			7: 'A great opportunity is present, albeit hard to exploit.',
			8: 'It’s fat and happy, going on as it always has before.',
			9: 'The local ruler has an interest in its thriving.',
			10: 'It’s secretly cutting corners in its products or services.',
			11: 'It’s getting by on past glories, now a dwindled remnant.',
			12: 'It’s trying to branch out into a new field or location.'
		},
		'Major Actor': {
			1: 'Biggest business rival',
			2: 'Biggest customer',
			3: 'Brash entrepreneur',
			4: 'Brilliant innovator',
			5: 'Careless owner’s child',
			6: 'Chief accountant',
			7: 'Critically-skilled employee',
			8: 'Hard-bitten founder',
			9: 'Heir-apparent to business',
			10:'Main supplier of goods',
			11:'Major investor',
			12:'Popular crew foreman'
		},
		'Minor Actor': {
			1: '“Protection” outfit heavy',
			2: 'Aspiring vendor to the business',
			3: 'Bribeable local inspector',
			4: 'Devoted long-time staffer',
			5: 'Embittered ex-employee',
			6: 'Gold-digging lover of the owner',
			7: 'Infuriated customer',
			8: 'Oldest employee of the business',
			9: 'Petty thief of stock',
			10:'Shady black market contact',
			11:'Spy for a rival business',
			12:'Wildly impractical dreamer'
		},
		'Power Sources': {
			1: 'The business owes them a great deal of money.',
			2: 'The employees love them and listen to them unfailingly.',
			3: 'The others are physically afraid of their displeasure.',
			4: 'The vendors only trust them to negotiate supply buys.',
			5: 'They can legally wreck the business if too displeased.',
			6: 'They have magic or technology critical to the business.',
			7: 'They hold a secret critical to carrying out the business.',
			8: 'They know the details of a secret crime of the business.',
			9: 'They legally hold a large amount of the business’ money.',
			10:'They own the deed to a major business facility.',
			11:'They’re holding back the local extortionists and thieves.',
			12:'They’re particularly friendly with the local ruler.'
		},
		'Conflicts': {
			1: 'A competitor’s trying to buy them out.',
			2: 'A traitor\’s working for a competitor.',
			3: `It’s struggling under a heavy debt.`,
			4: 'Major actors are divided on strategy.',
			5: 'Recent effort has gone drastically bad.',
			6: 'The employees are in an uproar.',
			7: 'The locals blame it for something dire.',
			8: 'The owner is incapacitated indefinitely.',
			9: 'The ruler “asked” for a very costly favor.',
			10:'Their survival hinges on ongoing crime.',
			11: `They’re covering up a major crime.`,
			12: `They’ve lost a vital secret or tool.`
		}, 
		'Consequences': {
			1: 'A fragile, valuable economic link breaks up.',
			2: 'Debt chain reaction takes out a major firm.',
			3: 'It would enrage their major customers.',
			4: 'It would infuriate influential business partners.',
			5: 'Only they can provide a critical local service.',
			6: 'The local ruler relies on it for exerting control.',
			7: 'Their competitors are much more rapacious.',
			8: 'They provide critical employment to locals.',
			9: 'They\’re holding a community creditor at bay.',
			10:'They\’re keeping out ruffians and exploiters.',
			11:'They\’re paying off outside threats or grafters.',
			12:'They\’re the only supplier of a vital local necessity.'
		},
		'Court Defenses': {
			1: '“Protection” outfit legbreakers',
			2: 'A crew of burly, loyal employees',
			3: 'Decentralized business control',
			4: 'Expensive lawyers',
			5: 'Heavily fortified businessplace',
			6: 'Hired local wizard',
			7: 'Hired mercenaries',
			8: 'Inherited magical defenses',
			9: 'Personally fearsome owner',
			10:'Protective local citizens',
			11:'Purchased magical defenses',
			12:'Special police protection'
		}
	},
	'Community': {
		'firstChart': {
			'heading': 'Community Temperment',
			1: 'Amoral, indifferent to harm to outsiders or strangers',
			2: 'Corrupt, dealing with bandits and the sinister',
			3: 'Dislocated, recently forced to move or give up land',
			4: 'Divided, two factions furious with each other',
			5: 'Flush, enjoying new wealth from some new source',
			6: 'Insular, polite but reluctant to deal with strangers',
			7: 'Martial, expecting violence from the world',
			8: 'Oppressed, afflicted by some outside power',
			9: 'Pious, with life revolving around the community faith',
			10: 'Placid, the locals largely content with their lot',
			11: 'Rigid, clinging to tradition in the face of some peril',
			12: 'Xenophobic, mistrusting outsiders as dangerous'
		},
		'Major Actor': {
			1: 'Best hunter or farmer',
			2: 'Biggest gossip',
			3: 'Chief troublemaker',
			4: 'Hedge magician',
			5: 'Keeper of local relics',
			6: 'Mayor or chieftain',
			7: 'Most eligible unwed youth',
			8: 'Official from outside world',
			9: 'Rich trader or merchant',
			10:'Rival village or tribe chief',
			11:'Shaman or village priest',
			12:'Wealthy outsider'
		},
		'Minor Actor': {
			1: 'Adulterous spouse of major actor',
			2: 'Bad-luck farmer or hunter',
			3: 'Bandit seeking refuge or loot',
			4: 'Barfly who hears all',
			5: 'Local innkeeper or guest-keeper',
			6: 'Local miller or tanner',
			7: 'Naive farm lad or lass',
			8: 'Native prodigy at some local skill',
			9: 'Outcast suspected of evil magic',
			10:'Part-time prostitute',
			11:'Retired outsider seeking quiet',
			12:'Shabby vagabond'
		},
		'Power Sources': {
			1: 'Important outsiders will only deal with them',
			2: 'Only they know a skill that’s vital to the community',
			3: 'Their word is taken as final in matters of tradition',
			4: 'They have a huge family that backs them',
			5: 'They have a powerful magical item at their disposal',
			6: 'They have outsider friends with few scruples',
			7: 'They have unusual wealth for the community',
			8: 'They know secret magic or forbidden arts',
			9: 'They know the local terrain and its useful secrets',
			10:'They’re related to several important families or people',
			11:'They’re remarkably beautiful and persuasive',
			12:'They’re very personally formidable in a fight'
		},
		'Conflicts': {
			1: 'A family head is mistreating their kin',
			2: 'A family is being denied its old rights',
			3: 'A local is profiting from a dire crime',
			4: 'A new faith is preaching to locals',
			5: 'Dire want threatens family survival',
			6: 'Locals struggle to own a new discovery',
			7: 'Outsiders seek to buy village land',
			8: 'Outsiders seek to control the group',
			9: 'Someone might be using dark magic',
			10:'Someone wants to attack a rival group',
			11:'Tradition is demanding a sacrifice',
			12:'Vital resources are being depleted'
		}, 
		'Consequences': {
			1: 'A celestial law will loosen due to lack of rites',
			2: 'A dark power will recruit the survivors',
			3: 'A local noble will be angry at the loss',
			4: 'A now-unchecked threat will grow',
			5: 'A survivor will cut a deal with a sinister power',
			6: 'An important trade link will collapse',
			7: 'Kin-related villages will be furious',
			8: 'Nearby communities will lack a vital export',
			9: 'Revolutionaries will recruit the survivors',
			10:'Survivors will scatter and speak of the PCs',
			11:'The fury of a powerful home-town hero',
			12:'The survivors will turn to banditry'
		},
		'Court Defenses': {
			1: 'A guardian spirit or entity',
			2: 'A mighty retired hero',
			3: 'A mob of angry peasants',
			4: 'A potent local sorcerer',
			5: 'A relic of protection or power',
			6: 'A resident noble and his guards',
			7: 'A secret cult with potent magic',
			8: 'A small garrison of outside troops',
			9: 'Bandits who need the group',
			10:'Close alliances with neighbors',
			11:'So poor they can easily flee',
			12:'Trained guardian beasts'
		}
	},
	'Criminal': {

		'firstChart': {
			'heading': 'Main Line of Crime',
			1: 'Banditry in the surrounding area',
			2: 'Blackmailing and spying for the rich',
			3: 'Extortion from local merchants',
			4: 'Fighting rival groups for turf',
			5: 'Hired assassination and other violence',
			6: 'Human trafficking for labor or pleasure',
			7: 'Import of drugs or forbidden contraband',
			8: 'Persecuting a perceived group of enemies',
			9: 'Pickpocketing and petty theft',
			10: 'Smuggling of goods to avoid customs taxes',
			11: 'Theft and embezzlement from the government',
			12: 'Vices of all expensive kinds'
		},
		'Major Actor': {
			1: 'Ambitious revolutionary',
			2: 'Beggar king',
			3: 'Brothel owner',
			4: 'Corrupt official',
			5: 'Expert cat burglar',
			6: 'Family patriarch',
			7: 'Gang leader',
			8: 'Grasping priest',
			9: 'Loan shark',
			10:'Master assassin',
			11:'Scheming merchant',
			12:'Venal priest'
		},
		'Minor Actor': {
			1: 'Ambitious thief',
			2: 'Bribed guardsman',
			3: 'Canny smuggler',
			4: 'Cynical prostitute',
			5: 'Disposable thug',
			6: 'Embezzling clerk',
			7: 'Frightened shopkeep',
			8: 'Reluctant debtor',
			9: 'Roving pickpocket',
			10:'Scrawny urchin',
			11:'Sharp-eyed beggar',
			12:'Well-paid lawyer'
		},
		'Power Sources': {
			1: 'Controls a dangerous gang or cabal',
			2: 'Controls fencing or money handling',
			3: 'Handles the corrupt local officials',
			4: 'Has a stable of urchins and/or prostitutes',
			5: 'Has connections with the local elite',
			6: 'Has potent magic or a powerful relic',
			7: 'Knows secret paths and ways to anywhere',
			8: 'Owns a number of useful front businesses',
			9: 'Patriarch/matriarch of extended criminal family',
			10:'Provides a driving ideology for the group',
			11:'Provides muscle or murder for the group',
			12:'Provides social legitimacy for the group'
		},
		'Conflicts': {
			1: 'A lieutenant rebels against the boss',
			2: 'An assassin\'s after a major actor',
			3: 'Control of a new drug or contraband',
			4: 'Control of an important local official',
			5: 'Dispute over whether to kill someone',
			6: 'Expulsion of outsiders from their turf',
			7: 'Possession of a new-found treasure',
			8: 'Revenge for a theft or offense',
			9: 'Someone\'s trying to unify local gangs',
			10:'Someone\'s turned traitor to the law',
			11:'Subverting a source of law and order',
			12:'Turf struggle over working territories'
		}, 
		'Consequences': {
			1: 'A local group relies on them for a living',
			2: 'The ruler uses them to contain a serious rival',
			3: 'Their affiliates provide vital financial services',
			4: 'Their blackmail would get out, causing chaos',
			5: 'They act as jailers to a magical danger',
			6: 'They actually provide vital aid to the poor',
			7: 'They bleed off otherwise-active rebels',
			8: 'They defend an innocent group from pogroms',
			9: 'They hold back a tyrannical force of oppression',
			10:'They keep monsters from infesting dark places',
			11:'They keep practical order on the streets',
			12:'They retain important magical arts'
		},
		'Court Defenses': {
			1: 'Crew of elite assassins',
			2: 'Elaborate poisons',
			3: 'Extremely hard to find',
			4: 'Frame foes for crimes',
			5: 'Hidden in fortified area',
			6: 'Hostages or familial threats',
			7: 'Innocent front group',
			8: 'Many suborned commoners',
			9: 'Mobs of burly street thugs',
			10:'Several corrupt officials',
			11:'Stolen magical relics',
			12:'Treacherous seducer'
		}
	}
};