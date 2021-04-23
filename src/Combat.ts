import { Entity, Config, Options } from './Entity';
import { Data } from './TypeDefs';

export type TurnType = { round: number | null, turn: number | null, tokenId: string | null; };
export type Combatant = {
	token: any,
	actor: any,
	name: any,
	permission: any,
	players: any,
	owner: any,
	resource: any,
	img: any,
	initiative: any,
	visible: any,
	hidden: any,
	tokenId: any;
};
export type Scene =
	{
		tokenId: any;
	};
export type Round = { round: number | null, turn: number | null, tokenId: string | null; };

export type Settings = {
	resource?: any,
	skipDefeated?: any;
};

declare type DiceTerm = any;
declare type DicePool = any;


export type Roll = {
	/**
 * The original provided data
 * @type {Object}
 */
	data: any,

	/**
	 * An array of inner terms which were rolled parenthetically
	 * @type {DiceTerm[]}
	 */
	_dice: DiceTerm[],

	/**
	 * The evaluated results of the Roll
	 * @type {Array<number|string>}
	 */
	results: Array<number | string>,

	/**
	 * The identified terms of the Roll
	 * @type {Array<Roll|DicePool|DiceTerm|number|string>}
	 */
	terms: Array<Roll | DicePool | DiceTerm | number | string>,

	/**
	 * The original formula before evaluation
	 * @type {string}
	 */
	_formula: string,

	/**
	 * An internal flag for whether the Roll object has been rolled
	 * @type {boolean}
	 * @private
	 */
	_rolled: boolean,

	/**
	 * Cache the evaluated total to avoid re-evaluating it
	 * @type {number|null}
	 * @private
	 */
	_total: number | null,
};

/**
 * The Combat Entity defines a particular combat encounter which can occur within the game session
 * Combat instances belong to the CombatEncounters collection
 * @extends {Entity}
 */
export class Combat extends Entity
{
	/**
	 * The configuration setting used to record Combat preferences
	 * @type {string}
	 */
	static CONFIG_SETTING: string;
	/** @override */
	static get config(): Config { throw new Error(); }
	constructor(...args: any[]);
	constructor(data: any, options: any) { super(data, options); }
	/**
	 * Track the sorted turn order of this combat encounter
	 * @type {Combatant[]}
	 */
	turns!: Combatant[];
	/**
	 * Record the current round, turn, and tokenId to understand changes in the encounter state
	 * @type {}
	 * @private
	 */
	private current!: Round;
	/**
	 * Track the previous round, turn, and tokenId to understand changes in the encounter state
	 * @type {}
	 * @private
	 */
	private previous!: Round;
	/**
	 * Track whether a sound notification is currently being played to avoid double-dipping
	 * @type {boolean}
	 * @private
	 */
	private _soundPlaying!: boolean;
	/**
	 * Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name.
	 * @return {Combatant[]}
	 */
	setupTurns(): Combatant[] { throw ""; }

	/**
	 * Prepare turn data for one specific combatant.
	 * @private
	 */
	_prepareCombatant(c: Combatant, scene: Scene, players: any[], settings: Settings = {})
	{
		return c;
	}

	/**
	 * Define how the array of Combatants is sorted in the displayed list of the tracker.
	 * This method can be overridden by a system or module which needs to display combatants in an alternative order.
	 * By default sort by initiative, falling back to name
	 * @private
	 */
	_sortCombatants(a: Combatant, b: Combatant): number
	{
		return a.tokenId - b.tokenId;
	}
	/**
	 * A convenience reference to the Array of combatant data within the Combat entity
	 * @type {object[]}
	 */
	get combatants(): any[] { throw ""; }
	/**
	 * Get the data object for the Combatant who has the current turn
	 * @type {Combatant}
	 */
	get combatant(): Combatant { throw ""; }
	/**
	 * The numeric round of the Combat encounter
	 * @type {number}
	 */
	get round(): number { throw ""; }
	/**
	 * The numeric turn of the combat round in the Combat encounter
	 * @type {number}
	 */
	get turn(): number { throw ""; }
	/**
	 * Get the Scene entity for this Combat encounter
	 * @return {Scene}
	 */
	get scene(): Scene { throw ""; }
	/**
	 * Return the object of settings which modify the Combat Tracker behavior
	 * @return {object}
	 */
	get settings(): any { throw ""; }
	/**
	 * Has this combat encounter been started?
	 * @type {boolean}
	 */
	get started(): boolean { throw ""; }
	/**
	 * Set the current Combat encounter as active within the Scene.
	 * Deactivate all other Combat encounters within the viewed Scene and set this one as active
	 * @return {Promise<Combat>}
	 */
	activate(): Promise<Combat> { throw ""; }
	/**
	 * Begin the combat encounter, advancing to round 1 and turn 1
	 * @return {Promise<Combat>}
	 */
	startCombat(): Promise<Combat> { throw ""; }
	/**
	 * Advance the combat to the next turn
	 * @return {Promise<Combat>}
	 */
	nextTurn(): Promise<Combat> { throw ""; }
	/**
	 * Rewind the combat to the previous turn
	 * @return {Promise<Combat>}
	 */
	previousTurn(): Promise<Combat> { throw ""; }
	/**
	 * Advance the combat to the next round
	 * @return {Promise<Combat>}
	 */
	nextRound(): Promise<Combat> { throw ""; }
	/**
	 * Rewind the combat to the previous round
	 * @return {Promise<Combat>}
	 */
	previousRound(): Promise<Combat> { throw ""; }
	/**
	 * Reset all combatant initiative scores, setting the turn back to zero
	 * @return {Promise<Combat>}
	 */
	resetAll(): Promise<Combat> { throw ""; }
	/**
	 * Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker
	 * @return {Promise<void>}
	 */
	endCombat(): Promise<void> { throw ""; }
	/** @override */
	getCombatant(id: any): any { throw ""; }
	/**
	 * Get a Combatant using its Token id
	 * @param {string} tokenId   The id of the Token for which to acquire the combatant
	 */
	getCombatantByToken(tokenId: string): any { throw ""; }
	/**
	 * Set initiative for a single Combatant within the Combat encounter.
	 * Turns will be updated to keep the same combatant as current in the turn order
	 * @param {string} id         The combatant ID for which to set initiative
	 * @param {number} value      A specific initiative value to set
	 */
	setInitiative(id: string, value: number): Promise<void> { throw ""; }
	/**
	 * Roll initiative for one or multiple Combatants within the Combat entity
	 * @param {string|string[]} ids     A Combatant id or Array of ids for which to roll
	 * @param {string|null} [formula]   A non-default initiative formula to roll. Otherwise the system default is used.
	 * @param {boolean} [updateTurn]    Update the Combat turn after adding new initiative scores to keep the turn on
	 *                                  the same Combatant.
	 * @param {object} [messageOptions] Additional options with which to customize created Chat Messages
	 * @return {Promise<Combat>}        A promise which resolves to the updated Combat entity once updates are complete.
	 */
	rollInitiative(ids: string | string[], { formula = null, updateTurn = true, messageOptions = {} } = {}): Promise<Combat> { throw ""; }
	/**
	 * Acquire the default dice formula which should be used to roll initiative for a particular combatant.
	 * Modules or systems could choose to override or extend this to accommodate special situations.
	 * @private
	 *
	 * @param {object} combatant      Data for the specific combatant for whom to acquire an initiative formula. This
	 *                                is not used by default, but provided to give flexibility for modules and systems.
	 * @return {string}               The initiative formula to use for this combatant.
	 */
	private _getInitiativeFormula!: string;
	/**
	 * Get a Roll object which represents the initiative roll for a given combatant.
	 * @private
	 * @param {object} combatant      Data for the specific combatant for whom to acquire an initiative formula. This
	 *                                is not used by default, but provided to give flexibility for modules and systems.
	 * @param {string} formula        An explicit Roll formula to use for the combatant.
	 * @return {Roll}                 The Roll instance to use for the combatant.
	 */
	_getInitiativeRoll(combatant: any, formula: string): Roll
	{
		throw "";
	}

	/**
	 * Roll initiative for all non-player actors who have not already rolled
	 * @param {...*}  args    Additional arguments forwarded to the Combat.rollInitiative method
	 */
	rollNPC(ids: string | string[], { formula = null, updateTurn = true, messageOptions = {} } = {}): Promise<Combat> { throw ""; }
	/**
	 * Roll initiative for all combatants which have not already rolled
	 * @param {...*} args     Additional arguments forwarded to the Combat.rollInitiative method
	 */
	rollAll(ids: string | string[], { formula = null, updateTurn = true, messageOptions = {} } = {}): Promise<Combat> { throw ""; }
	/**
	 * Create a new Combatant embedded entity
	 * @see {@link Combat#createEmbeddedEntity}
	 */
	createCombatant(data: Data | Data[], options: Options): Promise<any> { throw ""; }
	/**
	 * Update an existing Combatant embedded entity
	 * @see {@link Combat#updateEmbeddedEntity}
	 */
	updateCombatant(data: Data | Data[], options: Options): Promise<Entity | Entity[]> { throw ""; }
	/**
	 * Delete an existing Combatant embedded entity
	 * @see {@link Combat#deleteEmbeddedEntity}
	 */
	deleteCombatant(id: Data | Data[], options: Options): Promise<any> { throw ""; }
}