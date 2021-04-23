import { Entity } from './Entity';
/**
 * The Combat Entity defines a particular combat encounter which can occur within the game session
 * Combat instances belong to the CombatEncounters collection
 * @extends {Entity}
 */
export class Combat extends Entity {
    constructor(data, options) { super(data, options); }
    /** @override */
    static get config() { throw new Error(); }
    /**
     * Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name.
     * @return {Combatant[]}
     */
    setupTurns() { throw ""; }
    /**
     * Prepare turn data for one specific combatant.
     * @private
     */
    _prepareCombatant(c, scene, players, settings = {}) {
        return c;
    }
    /**
     * Define how the array of Combatants is sorted in the displayed list of the tracker.
     * This method can be overridden by a system or module which needs to display combatants in an alternative order.
     * By default sort by initiative, falling back to name
     * @private
     */
    _sortCombatants(a, b) {
        return a.tokenId - b.tokenId;
    }
    /**
     * A convenience reference to the Array of combatant data within the Combat entity
     * @type {object[]}
     */
    get combatants() { throw ""; }
    /**
     * Get the data object for the Combatant who has the current turn
     * @type {Combatant}
     */
    get combatant() { throw ""; }
    /**
     * The numeric round of the Combat encounter
     * @type {number}
     */
    get round() { throw ""; }
    /**
     * The numeric turn of the combat round in the Combat encounter
     * @type {number}
     */
    get turn() { throw ""; }
    /**
     * Get the Scene entity for this Combat encounter
     * @return {Scene}
     */
    get scene() { throw ""; }
    /**
     * Return the object of settings which modify the Combat Tracker behavior
     * @return {object}
     */
    get settings() { throw ""; }
    /**
     * Has this combat encounter been started?
     * @type {boolean}
     */
    get started() { throw ""; }
    /**
     * Set the current Combat encounter as active within the Scene.
     * Deactivate all other Combat encounters within the viewed Scene and set this one as active
     * @return {Promise<Combat>}
     */
    activate() { throw ""; }
    /**
     * Begin the combat encounter, advancing to round 1 and turn 1
     * @return {Promise<Combat>}
     */
    startCombat() { throw ""; }
    /**
     * Advance the combat to the next turn
     * @return {Promise<Combat>}
     */
    nextTurn() { throw ""; }
    /**
     * Rewind the combat to the previous turn
     * @return {Promise<Combat>}
     */
    previousTurn() { throw ""; }
    /**
     * Advance the combat to the next round
     * @return {Promise<Combat>}
     */
    nextRound() { throw ""; }
    /**
     * Rewind the combat to the previous round
     * @return {Promise<Combat>}
     */
    previousRound() { throw ""; }
    /**
     * Reset all combatant initiative scores, setting the turn back to zero
     * @return {Promise<Combat>}
     */
    resetAll() { throw ""; }
    /**
     * Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker
     * @return {Promise<void>}
     */
    endCombat() { throw ""; }
    /** @override */
    getCombatant(id) { throw ""; }
    /**
     * Get a Combatant using its Token id
     * @param {string} tokenId   The id of the Token for which to acquire the combatant
     */
    getCombatantByToken(tokenId) { throw ""; }
    /**
     * Set initiative for a single Combatant within the Combat encounter.
     * Turns will be updated to keep the same combatant as current in the turn order
     * @param {string} id         The combatant ID for which to set initiative
     * @param {number} value      A specific initiative value to set
     */
    setInitiative(id, value) { throw ""; }
    /**
     * Roll initiative for one or multiple Combatants within the Combat entity
     * @param {string|string[]} ids     A Combatant id or Array of ids for which to roll
     * @param {string|null} [formula]   A non-default initiative formula to roll. Otherwise the system default is used.
     * @param {boolean} [updateTurn]    Update the Combat turn after adding new initiative scores to keep the turn on
     *                                  the same Combatant.
     * @param {object} [messageOptions] Additional options with which to customize created Chat Messages
     * @return {Promise<Combat>}        A promise which resolves to the updated Combat entity once updates are complete.
     */
    rollInitiative(ids, { formula = null, updateTurn = true, messageOptions = {} } = {}) { throw ""; }
    /**
     * Get a Roll object which represents the initiative roll for a given combatant.
     * @private
     * @param {object} combatant      Data for the specific combatant for whom to acquire an initiative formula. This
     *                                is not used by default, but provided to give flexibility for modules and systems.
     * @param {string} formula        An explicit Roll formula to use for the combatant.
     * @return {Roll}                 The Roll instance to use for the combatant.
     */
    _getInitiativeRoll(combatant, formula) {
        throw "";
    }
    /**
     * Roll initiative for all non-player actors who have not already rolled
     * @param {...*}  args    Additional arguments forwarded to the Combat.rollInitiative method
     */
    rollNPC(ids, { formula = null, updateTurn = true, messageOptions = {} } = {}) { throw ""; }
    /**
     * Roll initiative for all combatants which have not already rolled
     * @param {...*} args     Additional arguments forwarded to the Combat.rollInitiative method
     */
    rollAll(ids, { formula = null, updateTurn = true, messageOptions = {} } = {}) { throw ""; }
    /**
     * Create a new Combatant embedded entity
     * @see {@link Combat#createEmbeddedEntity}
     */
    createCombatant(data, options) { throw ""; }
    /**
     * Update an existing Combatant embedded entity
     * @see {@link Combat#updateEmbeddedEntity}
     */
    updateCombatant(data, options) { throw ""; }
    /**
     * Delete an existing Combatant embedded entity
     * @see {@link Combat#deleteEmbeddedEntity}
     */
    deleteCombatant(id, options) { throw ""; }
}
//# sourceMappingURL=Combat.js.map