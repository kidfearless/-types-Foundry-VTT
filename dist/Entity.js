/**
 * An abstract class pattern for all primary data entities within the Foundry VTT Framework. An entity represents a
 * primary data concept, for example: Actor, Item, Scene, or ChatMessage. Each Entity type in Foundry Virtual
 * Tabletop extends this base Entity class which ensures similar behavior and workflow across all entity types.
 *
 * Documentation for this class is provided for reference, but developers should not extend this class directly,
 * instead work with or extend the Entity implementations that are referenced in this section of the API documentation.
 *
 * Entities are instantiated by providing their base data, and an optional Array of Application instances which should
 * be automatically refreshed when the Entity experiences an update.
 * @abstract
 * @interface
 *
 * @see {@link EntityCollection} The EntityCollection abstract class which contains Entity instances.
 * @see {@link Actor} The Actor Entity.
 * @see {@link Combat} The Combat Encounter Entity.
 * @see {@link Folder} The Folder Entity.
 * @see {@link Item} The Item Entity.
 * @see {@link JournalEntry} The Journal Entry Entity.
 * @see {@link ChatMessage} The Chat Message Entity.
 * @see {@link Playlist} The Audio Playlist Entity.
 * @see {@link Scene} The Scene Entity.
 * @see {@link RollTable} The Rollable Table Entity.
 * @see {@link User} The User Entity.
 * @see {@link Compendium} The Compendium which may contain Entities in a compendium pack.
 *
 * @param {Object} data       The data Object with which to create the Entity
 * @param {Object} options    Additional options which modify the created Entity behavior
 * @param {Compendium} [options.compendium] A reference to the Compendium pack from which this Entity was drawn.
 *
 * @example
 * let actorData = {name: "John Doe", type: "character", img: "icons/svg/mystery-man.svg"};
 * let actor = new Actor(actorData);
 */
export class Entity {
    constructor(data, options) {
    }
    /* -------------------------------------------- */
    /**
     * Safely Initialize data structure for the Entity.
     * Errors that occur here should be captured and logged, but should not break construction of the Entity instance.
     */
    _initialize() { }
    /* -------------------------------------------- */
    /**
     * Configure the attributes of this Entity class
     * @type {Object}
     * @property {Entity} baseEntity       The parent class which directly inherits from the Entity interface.
     * @property {EntityCollection} collection   The EntityCollection instance to which Entities of this type belong.
     * @property {string[]} embeddedEntities  The names of any Embedded Entities within the Entity data structure.
     */
    static get config() {
        throw new Error(`The ${this.name} subclass must define the Entity.config object`);
    }
    /* -------------------------------------------- */
    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     * @type {string}
     */
    get uuid() {
        if (this.compendium)
            return `Compendium.${this.compendium.collection}.${this.id}`;
        return `${this.entity}.${this.id}`;
    }
    /* -------------------------------------------- */
    /**
     * Return a string which represents a dynamic link to this Entity.
     * @return {string}
     */
    get link() {
        if (this.compendium)
            return `@Compendium[${this.compendium.collection}.${this.id}]{${this.name}}`;
        return `@${this.entity}[${this.id}]{${this.name}}`;
    }
    /* -------------------------------------------- */
    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData() {
        // Prepare Entity data
        const data = this.data;
        return data;
    }
    /* -------------------------------------------- */
    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities() {
        const ee = Entity.config.embeddedEntities;
    }
    /* -------------------------------------------- */
    /**
     * Obtain a reference to the Array of source data within the data object for a certain Embedded Entity name
     * @param {string} embeddedName   The name of the Embedded Entity type
     * @return {object[]}             The Array of source data where Embedded Entities of this type are stored
     */
    getEmbeddedCollection(embeddedName) {
        const collection = Entity.config.embeddedEntities[embeddedName];
        if (!collection) {
            throw new Error(`${embeddedName} is not a valid Embedded Entity in a ${this.constructor.name}`);
        }
        return this._data[collection];
    }
    /* -------------------------------------------- */
    /**
     * Render all of the Application instances which are connected to this Entity by calling their respective
     * {@link Application#render} methods.
     * @param {boolean} force     Force rendering
     * @param {Options} context   Optional context
     */
    render(force, context = {}) {
    }
    /* -------------------------------------------- */
    /*  Properties
    /* -------------------------------------------- */
    /**
     * Return a reference to the EntityCollection instance which stores Entity instances of this type. This property is
     * available as both a static and instance method and should be overridden by subclass Entity implementations.
     * @type {EntityCollection}
     * @static
     */
    static get collection() {
        if (!this.config.collection) {
            throw new Error(`An Entity subclass must configure the EntityCollection it belongs to.`);
        }
        return this.config.collection;
    }
    /* -------------------------------------------- */
    /** @alias {Entity.collection} */
    get collection() {
        return Entity.collection;
    }
    /* -------------------------------------------- */
    /**
     * The class name of the base Entity type, for example "Actor". This is useful in cases where there is an inheritance
     * chain. Many places throughout the framework rely upon the canonical entity name which may not always be equal
     * to the class name. This property is available as both a static and instance method.
     * @type {string}
     *
     * @example
     * class Actor2ndGen extends Actor {...}
     * Actor2ndGen.entity // "Actor"
     */
    static get entity() {
        if (!this.config.baseEntity)
            throw new Error(`An Entity subclass must configure the baseEntity it represents.`);
        return this.config.baseEntity.name;
    }
    /* -------------------------------------------- */
    /** @alias {Entity.entity} */
    get entity() {
        return Entity.entity;
    }
    /* -------------------------------------------- */
    /**
     * A convenience accessor for the _id attribute of the Entity data object.
     * @type {string}
     */
    get id() {
        return this.data._id;
    }
    /* -------------------------------------------- */
    /** @alias {Entity#id} */
    get _id() {
        return this.data._id;
    }
    /* -------------------------------------------- */
    /**
     * A convenience accessor for the name attribute of the Entity data object
     * @type {string}
     */
    get name() {
        return this.data.name;
    }
    /* -------------------------------------------- */
    /**
     * A property which gets or creates a singleton instance of the sheet class used to render and edit data for this
     * particular entity type.
     * @type {BaseEntitySheet|null}
     *
     * @example <caption>A subclass of the Actor entity</caption>
     * let actor = game.entities.actors[0];
     * actor.sheet; // ActorSheet
     */
    get sheet() {
        return null;
    }
    /* -------------------------------------------- */
    /**
     * Obtain a reference to the BaseEntitySheet implementation which should be used to render the Entity instance
     * configuration sheet.
     * @private
     */
    get _sheetClass() {
        return null;
    }
    /* -------------------------------------------- */
    /**
     * Return a reference to the Folder which this Entity belongs to, if any.
     * @type {Folder|null}
     *
     * @example <caption>Entities may belong to Folders</caption>
     * let folder = game.folders.entities[0];
     * let actor = await Actor.create({name: "New Actor", folder: folder.id});
     * console.log(actor.data.folder); // folder.id;
     * console.log(actor.folder); // folder;
     */
    get folder() {
        return null;
    }
    /* -------------------------------------------- */
    /**
     * Return the permission level that the current game User has over this Entity.
     * See the CONST.ENTITY_PERMISSIONS object for an enumeration of these levels.
     * @type {number}
     *
     * @example
     * game.user.id; // "dkasjkkj23kjf"
     * entity.data.permission; // {default: 1, "dkasjkkj23kjf": 2};
     * entity.permission; // 2
     */
    get permission() {
        return 0;
    }
    /* -------------------------------------------- */
    /**
     * A boolean indicator for whether or not the current game User has ownership rights for this Entity.
     * This property has a setter which allows for ownership rights to be temporarily overridden on a per-instance basis.
     * @type {boolean}
     */
    get owner() {
        return true;
    }
    /* -------------------------------------------- */
    /**
     * A boolean indicator for whether or not the current game User has at least limited visibility for this Entity.
     * @type {boolean}
     */
    get visible() {
        return true;
    }
    /* -------------------------------------------- */
    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     * Note that a GM user's perspective of an Entity is never limited.
     * @type {boolean}
     */
    get limited() {
        return false;
    }
    /* -------------------------------------------- */
    /*  Permission Controls                         */
    /* -------------------------------------------- */
    /**
     * Return an array of User entities who have a certain permission level or greater to the Entity.
     * @param {string|number} permission    The permission level or level name to test
     * @param {boolean} exact               Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level
     * @returns {User[]}                    An array of User entities who match the permission level
     */
    getUsers(permission, exact = false) {
        return [];
    }
    /* -------------------------------------------- */
    /**
     * Test whether a provided User a specific permission level (or greater) over the Entity instance
     * @param {User} user                   The user to test for permission
     * @param {string|number} permission    The permission level or level name to test
     * @param {boolean} exact               Tests for an exact permission level match, by default this method tests for
     *                                      an equal or greater permission level.
     * @return {boolean}                    Whether or not the user has the permission for this Entity.
     *
     * @example <caption>Test whether a specific user has a certain permission</caption>
     * // These two are equivalent
     * entity.hasPerm(game.user, "OWNER");
     * entity.owner;
     * // These two are also equivalent
     * entity.hasPerm(game.user, "LIMITED", true);
     * entity.limited;
     */
    hasPerm(user, permission, exact = false) {
        return true;
    }
    /* -------------------------------------------- */
    /**
     * Test whether a given User has permission to perform some action on this Entity
     * @param {User} user           The User requesting creation
     * @param {string} action       The attempted action
     * @param {Entity} target       The targeted Entity
     * @return {boolean}            Does the User have permission?
     */
    static can(user, action, target) {
        return false;
    }
    /* -------------------------------------------- */
    /**
     * Test whether a given User has permission to perform some action on this Entity
     * @param {User} user           The User requesting creation
     * @param {string} action       The attempted action
     * @return {boolean}            Does the User have permission?
     */
    can(user, action) {
        return false;
    }
    /* -------------------------------------------- */
    /**
     * Test for whether this Entity can be owned by any non-gamemaster player.
     * @return {boolean}
     */
    get hasPlayerOwner() {
        return false;
    }
    /**
   * Update the current Entity using provided input data.
   * Data must be provided as a single object which updates the Entity data.
   * @see {Entity.update}
   *
   * @param {Data} data                   A Data object which updates the Entity
   * @param {Options} options             Additional options which customize the update workflow
   * @return {Promise<Entity>}            The updated Entity
   */
    update(data, options) { throw new Error(); }
    /**
    * Delete the current Entity.
    * @see {Entity.delete}
     
    * @param {Options} options             Options which customize the deletion workflow
    * @return {Promise<Entity>}            The deleted Entity
    */
    delete(options) { throw new Error(); }
    /**
     * Get an Embedded Entity by it's id from a named collection in the parent Entity.
     *
     * @param {string} embeddedName   The name of the Embedded Entity type to retrieve
     * @param {string} id             The numeric ID of the child to retrieve
     * @param {boolean} strict        Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @return {Object|null}          Retrieved data for the requested child, or null
     */
    getEmbeddedEntity(embeddedName, id, strict) { }
    /**
     * Create one or multiple EmbeddedEntities within this parent Entity.
     * Data may be provided as a single Object to create one EmbeddedEntity or as an Array of Objects to create many.
     * Entities may be temporary (unsaved to the database) by passing the temporary option as true.
     *
     * @param {string} embeddedName   The name of the Embedded Entity class to create
     * @param {Data|Data[]} data      A Data object or an Array of Data objects to create
     * @param {Options} options       Additional creation options which modify the request
     * @param {boolean} [options.temporary]     Create a temporary entity which is not saved to the world database. Default is false.
     * @param {boolean} [options.renderSheet]   Display the sheet for each created Embedded Entities once created.
     * @param {boolean} [options.noHook]        Block the dispatch of preUpdate hooks for this operation.
     *
     * @return {Promise<Data|Data[]>} A Promise which resolves to the created embedded Data once the creation request is successful
     *
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = {name: "Magic Sword", type: "weapon", img: "path/to/icon.png"};
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns one EmbeddedEntity, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     *
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const data = [{name: "Mace of Crushing", type: "weapon"}, {name: "Shield of Defense", type: "armor"}];
     * const created = await actor.createEmbeddedEntity("OwnedItem", data); // Returns an Array of EmbeddedEntities, saved to the Actor
     * const temp = await actor.createEmbeddedEntity("OwnedItem", data, {temporary: true}); // Not saved to the Actor
     */
    createEmbeddedEntity(embeddedName, data, options) { throw new Error(); }
    /**
     * Update one or multiple existing entities using provided input data.
     * Data may be provided as a single object to update one Entity, or as an Array of Objects.
     * @static
     *
     * @param {string} embeddedName   The name of the Embedded Entity class to create
     * @param {Data|Data[]} data            A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param {Options} options             Additional options which customize the update workflow
     * @param {boolean} [options.diff]      Difference the provided data against the current to eliminate unnecessary changes.
     * @param {boolean} [options.noHook]        Block the dispatch of preUpdate hooks for this operation.
     *
     * @return {Promise<Entity|Entity[]>}   The updated Entity or array of Entities
     *
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const update = {_id: item._id, name: "Magic Sword +1"};
     * const updated = await actor.updateEmbeddedEntity("OwnedItem", update); // Updates one EmbeddedEntity
     *
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const updates = weapons.map(i => {
     *   return {_id: i._id, name: i.name + "+1"};
     * }
     * const updated = await actor.createEmbeddedEntity("OwnedItem", updates); // Updates multiple EmbeddedEntity objects
     */
    updateEmbeddedEntity(embeddedName, data, options) { throw new Error(); }
    /**
     * Delete one or multiple existing EmbeddedEntity objects using provided input data.
     * Data may be provided as a single id to delete one object or as an Array of string ids.
     * @static
     *
     * @param {string} embeddedName         The name of the Embedded Entity class to create
     * @param {string|string[]} data        A Data object or array of Data. Each element must contain the _id of an existing Entity.
     * @param {Options} options             Additional options which customize the update workflow
     * @param {boolean} [options.noHook]        Block the dispatch of preUpdate hooks for this operation.
     *
     * @return {Promise<Data|Data[]>}       The deleted Embedded Entities
     *
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const item = actor.data.items.find(i => i.name === "Magic Sword");
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", item._id); // Deletes one EmbeddedEntity
     *
     * @example
     * const actor = game.actors.get("dfv934kj23lk6h9k");
     * const weapons = actor.data.items.filter(i => i.type === "weapon");
     * const deletions = weapons.map(i => i._id);
     * const deleted = await actor.deleteEmbeddedEntity("OwnedItem", deletions); // Deletes multiple EmbeddedEntity objects
  
     */
    deleteEmbeddedEntity(embeddedName, data, options) { throw new Error(); }
    /**
     * Get the value of a "flag" for this Entity
     * See the setFlag method for more details on flags
     *
     * @param {string} scope    The flag scope which namespaces the key
     * @param {string} key      The flag key
     * @return {*}              The flag value
     */
    getFlag(scope, key) { }
    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     *
     * @param {string} scope    The flag scope which namespaces the key
     * @param {string} key      The flag key
     * @param {*} value         The flag value
     *
     * @return {Promise.<Entity>} A Promise resolving to the updated Entity
     */
    setFlag(scope, key, value) { throw new Error(); }
    /**
     * Remove a flag assigned to the Entity
     * @param {string} scope      The flag scope which namespaces the key
     * @param {string} key        The flag key
     * @return {Promise<Entity>}  The updated Entity instance
     */
    unsetFlag(scope, key) { throw new Error(); }
    /**
     * Sort this Entity relative a target by providing the target, an Array of siblings and other options.
     * If the Entity has an rendered sheet, record the sort change as part of a form submission
     * See SortingHelper.performIntegerSort for more details
     */
    sortRelative({ target, siblings, sortKey, sortBefore, updateData } = {}) { throw new Error(); }
    /**
     * Clone an Entity, creating a new Entity using the current data as well as provided creation overrides.
     *
     * @param {Object} createData     Additional data which overrides current Entity data at the time of creation
     * @param {Object} options        Additional creation options passed to the Entity.create method
     * @returns {Promise.<Entity>}    A Promise which resolves to the created clone Entity
     */
    clone(createData, options) { throw new Error(); }
    /**
     * Serializing an Entity should simply serialize it's inner data, not the entire instance
     * @return {Object}
     */
    toJSON() { }
    /**
     * Export entity data to a JSON file which can be saved by the client and later imported into a different session
     */
    exportToJSON() { }
    /**
     * Import data and update this entity
     * @param {string} json         JSON data string
     * @return {Promise.<Entity>}   The updated Entity
     */
    importFromJSON(json) { throw new Error(); }
    /**
     * Render an import dialog for updating the data related to this Entity through an exported JSON file
     * @return {Promise.<void>}
     */
    importFromJSONDialog() { throw new Error(); }
    /**
     * Transform the Entity data to be stored in a Compendium pack.
     * Remove any features of the data which are world-specific.
     * This function is asynchronous in case any complex operations are required prior to exporting.
     *
     * @return {Object}   A data object of cleaned data ready for compendium import
     */
    toCompendium() { }
}
//# sourceMappingURL=Entity.js.map