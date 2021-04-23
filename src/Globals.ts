declare var ROUTE_PREFIX: string | undefined;
declare function parseInt(params:any): number;
/* ----------------------------------------- */
/*  Reusable Type Definitions                */
/* ----------------------------------------- */

/**
 * A single point, expressed as an object {x, y}
 * @typedef {PIXI.Point|{x: number, y: number}} Point
 */

/**
 * A single point, expressed as an array [x,y]
 * @typedef {number[]} PointArray
 */

/**
 * A Ray intersection point
 * @typedef {{x: number, y: number, t0: number, t1: number}|null} RayIntersection
 * @property [wall] Wall
 */

/**
 * A standard rectangle interface.
 * @typedef {PIXI.Rectangle|{x: number, y: number, width: number, height: number}} Rectangle
 */


/* ----------------------------------------- */
/*  Database Workflows                       */
/* ----------------------------------------- */

/**
 * The expected structure for a Data record
 * @typedef {{string, any}} Data
 * @property [_id] string
 */

/**
 * An object of optional keys and values which configure the behavior of a function
 * @typedef {{string, any}} Options
 */

const vtt = "Foundry VTT";
const VTT = "Foundry Virtual Tabletop";
const WEBSITE_URL = "https://foundryvtt.com";
const ASCII = `_______________________________________________________________
  _____ ___  _   _ _   _ ____  ______   __ __     _______ _____ 
 |  ___/ _ \\| | | | \\ | |  _ \\|  _ \\ \\ / / \\ \\   / |_   _|_   _|
 | |_ | | | | | | |  \\| | | | | |_) \\ V /   \\ \\ / /  | |   | |  
 |  _|| |_| | |_| | |\\  | |_| |  _ < | |     \\ V /   | |   | |  
 |_|   \\___/ \\___/|_| \\_|____/|_| \\_\\|_|      \\_/    |_|   |_|  
 ===============================================================`;

/* -------------------------------------------- */

/**
 * Define the allowed ActiveEffect application modes
 * @type {{string, number}}
 */
const ACTIVE_EFFECT_MODES = {
	CUSTOM: 0,
	MULTIPLY: 1,
	ADD: 2,
	DOWNGRADE: 3,
	UPGRADE: 4,
	OVERRIDE: 5
};


/* -------------------------------------------- */


/**
 * Define the string name used for the base entity type when specific sub-types are not defined by the system
 * @type {string}
 */
const BASE_ENTITY_TYPE = "base";

/**
 * Valid Chat Message types
 * @type {Object}
 */
const CHAT_MESSAGE_TYPES = {
	OTHER: 0,
	OOC: 1,
	IC: 2,
	EMOTE: 3,
	WHISPER: 4,
	ROLL: 5
};

/**
 * The allowed Entity types which may exist within a Compendium pack
 * This is a subset of ENTITY_TYPES
 * @type {Array}
 */
const COMPENDIUM_ENTITY_TYPES = ["Actor", "Item", "Scene", "JournalEntry", "Macro", "RollTable", "Playlist"];

/**
 * Define the set of languages which have built-in support in the core software
 * @type {string[]}
 */
const CORE_SUPPORTED_LANGUAGES = ["en"];

/**
 * The default artwork used for Token images if none is provided
 * @type {String}
 */
const DEFAULT_TOKEN = 'icons/svg/mystery-man.svg';

/**
 * The default artwork used for Note placeables if none is provided
 * @type {String}
 */
const DEFAULT_NOTE_ICON = 'icons/svg/book.svg';

/**
 * The supported dice roll visibility modes
 * @type {Object}
 */
const DICE_ROLL_MODES = {
	PUBLIC: "roll",
	PRIVATE: "gmroll",
	BLIND: "blindroll",
	SELF: "selfroll"
};


/* -------------------------------------------- */


/**
 * The allowed Drawing types which may be saved
 * @type {Object}
 */
const DRAWING_TYPES = {
	RECTANGLE: "r",
	ELLIPSE: "e",
	TEXT: "t",
	POLYGON: "p",
	FREEHAND: "f"
};

/**
 * The allowed fill types which a Drawing object may display
 * NONE: The drawing is not filled
 * SOLID: The drawing is filled with a solid color
 * PATTERN: The drawing is filled with a tiled image pattern
 * @type {Object}
 */
const DRAWING_FILL_TYPES = {
	NONE: 0,
	SOLID: 1,
	PATTERN: 2
};


/**
 * The default configuration values used for Drawing objects
 * @type {Object}
 */
const DRAWING_DEFAULT_VALUES = {
	width: 0,
	height: 0,
	rotation: 0,
	z: 0,
	hidden: false,
	locked: false,
	fillType: DRAWING_FILL_TYPES.NONE,
	fillAlpha: 0.5,
	bezierFactor: 0.0,
	strokeAlpha: 1.0,
	strokeWidth: 8,
	fontSize: 48,
	textAlpha: 1.0,
	textColor: "#FFFFFF"
};

/* -------------------------------------------- */

/**
 * Define the allowed Entity class types
 * @type {Array}
 */
const ENTITY_TYPES = [
	"Actor",
	"ChatMessage",
	"Combat",
	"Item",
	"Folder",
	"JournalEntry",
	"Macro",
	"Playlist",
	"RollTable",
	"Scene",
	"User",
];

/**
 * Define the allowed Entity types which may be dynamically linked in chat
 * @type {Array}
 */
const ENTITY_LINK_TYPES = ["Actor", "Item", "Scene", "JournalEntry", "Macro", "RollTable"];

/**
 * Define the allowed permission levels for a non-user Entity.
 * Each level is assigned a value in ascending order. Higher levels grant more permissions.
 * @type {Object}
 */
const ENTITY_PERMISSIONS = {
	"NONE": 0,
	"LIMITED": 1,
	"OBSERVER": 2,
	"OWNER": 3
};

/**
 * EULA version number
 * @type {String}
 */
const EULA_VERSION = "0.6.1";

/**
 * Define the allowed Entity types which Folders may contain
 * @type {Array}
 */
const FOLDER_ENTITY_TYPES = ["Actor", "Item", "Scene", "JournalEntry", "RollTable"];

/**
 * The maximum allowed level of depth for Folder nesting
 * @type {Number}
 */
const FOLDER_MAX_DEPTH = 3;

/**
 * The minimum allowed grid size which is supported by the software
 * @type {Number}
 */
const GRID_MIN_SIZE = 50;

/**
 * The allowed Grid types which are supported by the software
 * @type {Object}
 */
const GRID_TYPES = {
	"GRIDLESS": 0,
	"SQUARE": 1,
	"HEXODDR": 2,
	"HEXEVENR": 3,
	"HEXODDQ": 4,
	"HEXEVENQ": 5
};


/**
 * Enumerate the source types which can be used for an AmbientLight placeable object
 * @type {{UNIVERSAL: string, LOCAL: string, GLOBAL: string}}
 */
const SOURCE_TYPES = {
	LOCAL: "l",
	GLOBAL: "g",
	UNIVERSAL: "u"
};


/**
 * An Array of valid MacroAction scope values
 * @type {Array.<string>}
 */
const MACRO_SCOPES = ["global", "actors", "actor"];


/**
 * The allowed playback modes for an audio Playlist
 * DISABLED: The playlist does not play on its own, only individual Sound tracks played as a soundboard
 * SEQUENTIAL: The playlist plays sounds one at a time in sequence
 * SHUFFLE: The playlist plays sounds one at a time in randomized order
 * SIMULTANEOUS: The playlist plays all contained sounds at the same time
 * @type {Object}
 */
const PLAYLIST_MODES = {
	"DISABLED": -1,
	"SEQUENTIAL": 0,
	"SHUFFLE": 1,
	"SIMULTANEOUS": 2
};


/**
 * Encode the reasons why a package may be available or unavailable for use
 * @type {Object}
 */
const PACKAGE_AVAILABILITY_CODES = {
	"UNKNOWN": -1,
	"AVAILABLE": 0,
	"REQUIRES_UPDATE": 1,
	"REQUIRES_SYSTEM": 2,
	"REQUIRES_DEPENDENCY": 3,
	"REQUIRES_CORE": 4
};

/**
 * A safe password string which can be displayed
 */
const PASSWORD_SAFE_STRING = "•".repeat(16);


/**
 * The allowed software update channels
 * @type {Object}
 */
const SOFTWARE_UPDATE_CHANNELS = {
	"alpha": "SETUP.UpdateAlpha",
	"beta": "SETUP.UpdateBeta",
	"release": "SETUP.UpdateRelease"
};


/**
 * The default sorting density for manually ordering child objects within a parent
 * @type {Number}
 */
const SORT_INTEGER_DENSITY = 100000;

/**
 * The allowed types of a TableResult document
 * @type {Object}
 */
const TABLE_RESULT_TYPES = {
	TEXT: 0,
	ENTITY: 1,
	COMPENDIUM: 2
};

/**
 * Define the valid anchor locations for a Tooltip displayed on a Placeable Object
 * @type {Object}
 */
const TEXT_ANCHOR_POINTS = {
	CENTER: 0,
	BOTTOM: 1,
	TOP: 2,
	LEFT: 3,
	RIGHT: 4
};

/**
 * Describe the various thresholds of token control upon which to show certain pieces of information
 * NONE - no information is displayed
 * CONTROL - displayed when the token is controlled
 * OWNER HOVER - displayed when hovered by a GM or a user who owns the actor
 * HOVER - displayed when hovered by any user
 * OWNER - always displayed for a GM or for a user who owns the actor
 * ALWAYS - always displayed for everyone
 * @type {Object}
 */
const TOKEN_DISPLAY_MODES = {
	"NONE": 0,
	"CONTROL": 10,
	"OWNER_HOVER": 20,
	"HOVER": 30,
	"OWNER": 40,
	"ALWAYS": 50
};

/**
 * The allowed Token disposition types
 * HOSTILE - Displayed as an enemy with a red border
 * NEUTRAL - Displayed as neutral with a yellow border
 * FRIENDLY - Displayed as an ally with a cyan border
 */
const TOKEN_DISPOSITIONS = {
	"HOSTILE": -1,
	"NEUTRAL": 0,
	"FRIENDLY": 1
};

/**
 * Define the allowed User permission levels.
 * Each level is assigned a value in ascending order. Higher levels grant more permissions.
 * @type {Object}
 */
const USER_ROLES = {
	"NONE": 0,
	"PLAYER": 1,
	"TRUSTED": 2,
	"ASSISTANT": 3,
	"GAMEMASTER": 4
};

/**
 * Invert the User Role mapping to recover role names from a role integer
 * @type {Object}
 */
const USER_ROLE_NAMES = Object.entries(USER_ROLES).reduce((obj, r) =>
{
	obj[r[1]] = r[0];
	return obj;
}, {});


/**
 * A list of MIME types which are treated as uploaded "media", which are allowed to overwrite existing files.
 * Any non-media MIME type is not allowed to replace an existing file.
 * @type {string[]}
 */
const MEDIA_MIME_TYPES = [
	"image/apng", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/tiff", "image/webp",
	"audio/wave", "audio/wav", "audio/webm", "audio/ogg", "audio/midi", "audio/mpeg", "audio/opus", "audio/aac",
	"video/mpeg", "video/mp4", "video/ogg",
	"application/json", "application/ogg", "application/pdf",
];


/**
 * Define the named actions which users or user roles can be permitted to do.
 * Each key of this Object denotes an action for which permission may be granted (true) or withheld (false)
 * @type {Object}
 */
const USER_PERMISSIONS = {
	"BROADCAST_AUDIO": {
		label: "PERMISSION.BroadcastAudio",
		hint: "PERMISSION.BroadcastAudioHint",
		disableGM: true,
		defaultRole: USER_ROLES.TRUSTED
	},
	"BROADCAST_VIDEO": {
		label: "PERMISSION.BroadcastVideo",
		hint: "PERMISSION.BroadcastVideoHint",
		disableGM: true,
		defaultRole: USER_ROLES.TRUSTED
	},
	"ACTOR_CREATE": {
		label: "PERMISSION.ActorCreate",
		hint: "PERMISSION.ActorCreateHint",
		disableGM: false,
		defaultRole: USER_ROLES.ASSISTANT
	},
	"DRAWING_CREATE": {
		label: "PERMISSION.DrawingCreate",
		hint: "PERMISSION.DrawingCreateHint",
		disableGM: false,
		defaultRole: USER_ROLES.TRUSTED
	},
	"ITEM_CREATE": {
		label: "PERMISSION.ItemCreate",
		hint: "PERMISSION.ItemCreateHint",
		disableGM: false,
		defaultRole: USER_ROLES.ASSISTANT
	},
	"FILES_BROWSE": {
		label: "PERMISSION.FilesBrowse",
		hint: "PERMISSION.FilesBrowseHint",
		disableGM: false,
		defaultRole: USER_ROLES.TRUSTED
	},
	"FILES_UPLOAD": {
		label: "PERMISSION.FilesUpload",
		hint: "PERMISSION.FilesUploadHint",
		disableGM: false,
		defaultRole: USER_ROLES.ASSISTANT
	},
	"JOURNAL_CREATE": {
		label: "PERMISSION.JournalCreate",
		hint: "PERMISSION.JournalCreateHint",
		disableGM: false,
		defaultRole: USER_ROLES.TRUSTED
	},
	"MACRO_SCRIPT": {
		label: "PERMISSION.MacroScript",
		hint: "PERMISSION.MacroScriptHint",
		disableGM: false,
		defaultRole: USER_ROLES.PLAYER
	},
	"MESSAGE_WHISPER": {
		label: "PERMISSION.MessageWhisper",
		hint: "PERMISSION.MessageWhisperHint",
		disableGM: false,
		defaultRole: USER_ROLES.PLAYER
	},
	"SETTINGS_MODIFY": {
		label: "PERMISSION.SettingsModify",
		hint: "PERMISSION.SettingsModifyHint",
		disableGM: false,
		defaultRole: USER_ROLES.ASSISTANT
	},
	"SHOW_CURSOR": {
		label: "PERMISSION.ShowCursor",
		hint: "PERMISSION.ShowCursorHint",
		disableGM: true,
		defaultRole: USER_ROLES.PLAYER
	},
	"SHOW_RULER": {
		label: "PERMISSION.ShowRuler",
		hint: "PERMISSION.ShowRulerHint",
		disableGM: true,
		defaultRole: USER_ROLES.PLAYER
	},
	"TEMPLATE_CREATE": {
		label: "PERMISSION.TemplateCreate",
		hint: "PERMISSION.TemplateCreateHint",
		disableGM: false,
		defaultRole: USER_ROLES.PLAYER
	},
	"TOKEN_CREATE": {
		label: "PERMISSION.TokenCreate",
		hint: "PERMISSION.TokenCreateHint",
		disableGM: false,
		defaultRole: USER_ROLES.ASSISTANT
	},
	"TOKEN_CONFIGURE": {
		label: "PERMISSION.TokenConfigure",
		hint: "PERMISSION.TokenConfigureHint",
		disableGM: false,
		defaultRole: USER_ROLES.TRUSTED
	},
	"WALL_DOORS": {
		label: "PERMISSION.WallDoors",
		hint: "PERMISSION.WallDoorsHint",
		disableGM: false,
		defaultRole: USER_ROLES.PLAYER
	}
};


/**
 * The allowed directions of effect that a Wall can have
 * BOTH: The wall collides from both directions
 * LEFT: The wall collides only when a ray strikes its left side
 * RIGHT: The wall collides only when a ray strikes its right side
 * @type {Object}
 */
const WALL_DIRECTIONS = {
	BOTH: 0,
	LEFT: 1,
	RIGHT: 2
};

/**
 * The allowed door types which a Wall may contain
 * NONE: The wall does not contain a door
 * DOOR: The wall contains a regular door
 * SECRET: The wall contains a secret door
 * @type {Object}
 */
const WALL_DOOR_TYPES = {
	NONE: 0,
	DOOR: 1,
	SECRET: 2
};

/**
 * The allowed door states which may describe a Wall that contains a door
 * CLOSED: The door is closed
 * OPEN: The door is open
 * LOCKED: The door is closed and locked
 * @type {Object}
 */
const WALL_DOOR_STATES = {
	CLOSED: 0,
	OPEN: 1,
	LOCKED: 2
};

/**
 * The types of movement collision which a Wall may impose
 * NONE: Movement does not collide with this wall
 * NORMAL: Movement collides with this wall
 * @type {Object}
 */
const WALL_MOVEMENT_TYPES = {
	NONE: 0,
	NORMAL: 1
};

/**
 * The types of sensory collision which a Wall may impose
 * NONE: Senses do not collide with this wall
 * NORMAL: Senses collide with this wall
 * LIMITED: Senses collide with the second intersection, bypassing the first
 * @type {Object}
 */
const WALL_SENSE_TYPES = {
	NONE: 0,
	NORMAL: 1,
	LIMITED: 2
};

/**
 * The allowed set of HTML template extensions
 * @type {string[]}
 */
const HTML_FILE_EXTENSIONS = ["html", "hbs"];

/**
 * The supported file extensions for image-type files
 * @type {Array}
 */
const IMAGE_FILE_EXTENSIONS = ["jpg", "jpeg", "png", "svg", "webp"];

/**
 * The supported file extensions for video-type files
 * @type {Array}
 */
const VIDEO_FILE_EXTENSIONS = ["mp4", "ogg", "webm", "m4v"];

/**
 * The supported file extensions for audio-type files
 * @type {Array}
 */
const AUDIO_FILE_EXTENSIONS = ["flac", "mp3", "ogg", "wav", "webm"];

// Module Export
const CONST = {
	ASCII, vtt, VTT, WEBSITE_URL,
	ACTIVE_EFFECT_MODES, BASE_ENTITY_TYPE, CHAT_MESSAGE_TYPES, COMPENDIUM_ENTITY_TYPES, CORE_SUPPORTED_LANGUAGES,
	DEFAULT_TOKEN, DEFAULT_NOTE_ICON, DICE_ROLL_MODES,
	DRAWING_DEFAULT_VALUES, DRAWING_TYPES, DRAWING_FILL_TYPES,
	ENTITY_PERMISSIONS, ENTITY_TYPES, ENTITY_LINK_TYPES, EULA_VERSION,
	FOLDER_ENTITY_TYPES, FOLDER_MAX_DEPTH,
	GRID_MIN_SIZE, GRID_TYPES, MACRO_SCOPES, PLAYLIST_MODES, PACKAGE_AVAILABILITY_CODES, PASSWORD_SAFE_STRING,
	SOURCE_TYPES, MEDIA_MIME_TYPES, SOFTWARE_UPDATE_CHANNELS, SORT_INTEGER_DENSITY,
	TABLE_RESULT_TYPES, TEXT_ANCHOR_POINTS, TOKEN_DISPLAY_MODES, TOKEN_DISPOSITIONS,
	USER_PERMISSIONS, USER_ROLES, USER_ROLE_NAMES,
	WALL_SENSE_TYPES, WALL_MOVEMENT_TYPES, WALL_DOOR_STATES, WALL_DIRECTIONS, WALL_DOOR_TYPES,
	HTML_FILE_EXTENSIONS, IMAGE_FILE_EXTENSIONS, VIDEO_FILE_EXTENSIONS, AUDIO_FILE_EXTENSIONS
};


/* -------------------------------------------- */
/*  Math Functions                              */
/* -------------------------------------------- */

/**
 * Bound a number between some minimum and maximum value, inclusively
 * @param {number} num    The current value
 * @param {number} min    The minimum allowed value
 * @param {number} max    The maximum allowed value
 * @return {number}       The clamped number
 */
function clampNumber(num, min, max)
{
	return Math.min(max, Math.max(num, min));
}

/**
 * Round a floating point number to a certain number of decimal places
 * @param {number} number  A floating point number
 * @param {number} places  An integer number of decimal places
 */
function roundDecimals(number, places)
{
	places = Math.min(Math.trunc(places), 0);
	let scl = Math.pow(10, places);
	return Math.round(number * scl) / scl;
}

/**
 * Transform an angle in radians to a number in degrees
 * @param {number} angle    An angle in radians
 * @return {number}         An angle in degrees
 */
function toDegrees(angle)
{
	return angle * (180 / Math.PI);
}

/**
 * Transform an angle in degrees to be bounded within the domain [0, 360]
 * @param {number} degrees  An angle in degrees
 * @return {number}         The same angle on the range [0, 360]
 */
function normalizeDegrees(degrees)
{
	let nd = (degrees + 360) % 360;
	return (nd > 180) ? nd - 360 : nd;
}

/**
 * Transform an angle in degrees to an angle in radians
 * @param {number} angle    An angle in degrees
 * @return {number}         An angle in radians
 */
function toRadians(angle)
{
	return (angle % 360) * (Math.PI / 180);
}

/**
 * Transform an angle in radians to be bounded within the domain [-PI, PI]
 * @param {number} radians  An angle in degrees
 * @return {number}         The same angle on the range [-PI, PI]
 */
function normalizeRadians(radians)
{
	let pi2 = 2 * Math.PI;
	let nr = (radians + pi2) % pi2;
	return (nr > Math.PI) ? nr - pi2 : nr;
}

// Assign helper functions to the Math environment
Object.assign(Math, {
	clamped: clampNumber,
	decimals: roundDecimals,
	toDegrees,
	normalizeDegrees,
	toRadians,
	normalizeRadians
});


/* -------------------------------------------- */
/* String Methods                               */
/* -------------------------------------------- */

interface String {
	capitalize():string;
	titleCase():string;
	stripScripts():string;
	slugify():string;
}

String.prototype.capitalize = function ():string
{
	if (!this.length) return this;
	return this.charAt(0).toUpperCase() + this.slice(1);
};


String.prototype.titleCase = function ()
{
	if (!this.length) return this;
	return this.toLowerCase().split(' ').map(function (word)
	{
		return word.replace(word[0], word[0].toUpperCase());
	}).join(' ');
};


/**
 * Strip any <script> tags which were included within a provided string
 * @return {String|*}
 */
String.prototype.stripScripts = function ()
{
	let el = document.createElement("div");
	el.innerHTML = this;
	for (let s of el.getElementsByTagName("script"))
	{
		s.parentNode!.removeChild(s);
	}
	return el.innerHTML;
};


/* -------------------------------------------- */


/**
 * Transform any string into a url-viable slug string
 * @param {string} replacement    The replacement character to separate terms, default is '-'
 * @param {boolean} strict        Replace all non-alphanumeric characters, or allow them? Default false
 * @return {string}               The cleaned slug string
 */
String.prototype.slugify = function ({ replacement = '-', strict = false } = {})
{

	// Map characters to lower case ASCII
	const charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');
	let slug = this.split("").reduce((result, char) =>
	{
		return result + (charMap[char] || char);
	}, "").trim().toLowerCase();

	// Convert any spaces to the replacement character and de-dupe
	slug = slug.replace(new RegExp('[\\s' + replacement + ']+', 'g'), replacement);

	// If we're being strict, replace anything that is not alphanumeric
	if (strict)
	{
		slug = slug.replace(new RegExp('[^a-zA-Z0-9' + replacement + ']', 'g'), '');
	}
	return slug;
};


/* -------------------------------------------- */
/* Number Methods                               */
/* -------------------------------------------- */

interface Number
{
	ordinalString():string
	paddedString (digits:number):string
	signedString ():string
	between (a:number, b:number, inclusive?:boolean):boolean
	toNearest (interval?:number):number
	isNumeric (n)
}

interface NumberConstructor
{
	between(num:number, a:number, b:number, inclusive?:boolean):boolean
	isNumeric(n:any):boolean
}

Number.prototype.ordinalString = function ()
{
	let s = ["th", "st", "nd", "rd"],
		v = this % 100;
	return this + (s[(v - 20) % 10] || s[v] || s[0]);
};

Number.prototype.paddedString = function (digits)
{
	let s = "000000000" + this;
	return s.substr(s.length - digits);
};

Number.prototype.signedString = function ()
{
	return ((this < 0) ? "" : "+") + this;
};
Number.prototype.between = function (a:number, b:number, inclusive = true):boolean
{
	let min = Math.min(a, b);
	let max = Math.max(a, b);
	return inclusive ? (this >= min) && (this <= max) : (this > min) && (this < max);
};

/**
 * Round a number to the nearest number which is a multiple of a given interval
 * @param {number} interval     The interval to round the number to the nearest multiple of
 * @returns {number}            The rounded number
 *
 * @example
 * let n = 17.18;
 * n.toNearest(5); // 15
 * n.toNearest(10); // 20
 * n.toNearest(0.25); // 17.25
 */
Number.prototype.toNearest = function (interval = 1)
{
	const q = 1 / interval;
	return Math.round(this * q) / q;
};

/**
 * A faster numeric between check which avoids type coercion to the Number object
 * Since this avoids coercion, if non-numbers are passed in unpredictable results will occur. Use with caution.
 * @param {number} num
 * @param {number} a
 * @param {number} b
 * @param {boolean} inclusive
 * @return {boolean}
 */
Number.between = function (num, a, b, inclusive = true)
{
	let min = Math.min(a, b);
	let max = Math.max(a, b);
	return inclusive ? (num >= min) && (num <= max) : (num > min) && (num < max);
};

/**
 * Test whether a value is numeric
 * This is the highest performing algorithm currently available
 * https://jsperf.com/isnan-vs-typeof/5
 * @param {*} n       A value to test
 * @return {Boolean}  Is it a number?
 */
Number.isNumeric = function (n)
{
	if (n instanceof Array) return false;
	else if ([null, ""].includes(n)) return false;
	return +n === +n;
};


/* -------------------------------------------- */
/* Array Methods                                */
/* -------------------------------------------- */

interface ArrayConstructor {
	fromRange(n);
}

interface Array<T> {
	deepFlatten(): Array<T>;
	equals(other:any | Array<T>):boolean;
	partition(rule:Function): [];
	filterJoin(sep:string):string;
	findSplice(find:Function, replace?:any): any|null;
}

Array.fromRange = function (n)
{
	return Array.from(new Array(parseInt(n)).keys());
};


Array.prototype.deepFlatten = function ()
{
	return this.reduce((acc, val) => Array.isArray(val) ? acc.concat(val.deepFlatten()) : acc.concat(val), []);
};


/**
 * Test equality of the values of this array against the values of some other Array
 * @param {Array} other
 */
Array.prototype.equals = function(other)
{
	if (!(other instanceof Array) || (other.length !== this.length)) return false;
	return this.every((v, i) => other[i] === v);
};


/**
 * Partition an original array into two children array based on a logical test
 * Elements which test as false go into the first result while elements testing as true appear in the second
 * @param rule {Function}
 * @return {Array}    An Array of length two whose elements are the partitioned pieces of the original
 */
Array.prototype.partition = function (rule)
{
	return this.reduce((acc, val) =>
	{
		let test = rule(val);
		acc[Number(test)].push(val);
		return acc;
	}, [[], []]);
};

/**
 * Join an Array using a string separator, first filtering out any parts which return a false-y value
 * @param {string} sep    The separator string
 * @return {string}       The joined string, filtered of any false values
 */
Array.prototype.filterJoin = function (sep:string):string
{
	return this.filter(p => !!p).join(sep);
};


/**
 * Find an element within the Array and remove it from the array
 * @param {Function} find   A function to use as input to findIndex
 * @param {any} [replace]   A replacement for the spliced element
 * @return {any|null}       The replacement element, the removed element, or null if no element was found.
 */
Array.prototype.findSplice = function (find:Function, replace?:any): any|null
{
	const idx:number = this.findIndex(find);
	if (idx === -1) return null;
	if (replace !== undefined)
	{
		this.splice(idx, 1, replace);
		return replace;
	}
	else
	{
		const item = this[idx];
		this.splice(idx, 1);
		return item;
	}
};

/* -------------------------------------------- */
/* Date Methods                                 */
/* -------------------------------------------- */

interface Date
{
	isValid():boolean
	toDateInputString():string;
	toTimeInputString():string;
}

/**
 * Test whether a Date instance is valid.
 * A valid date returns a number for its timestamp, and NaN otherwise.
 * NaN is never equal to itself.
 * @returns {boolean}
 */
Date.prototype.isValid = function ()
{
	return this.getTime() === this.getTime();
};

/**
 * Return a standard YYYY-MM-DD string for the Date instance.
 * @returns {string}    The date in YYYY-MM-DD format
 */
Date.prototype.toDateInputString = function ()
{
	const yyyy = this.getFullYear();
	const mm = (this.getMonth() + 1).paddedString(2);
	const dd = this.getDate().paddedString(2);
	return `${yyyy}-${mm}-${dd}`;
};

/**
 * Return a standard H:M:S.Z string for the Date instance.
 * @returns {string}    The time in H:M:S format
 */
Date.prototype.toTimeInputString = function ()
{
	return this.toTimeString().split(" ")[0];
};

/* -------------------------------------------- */
/* Object Methods                               */
/* -------------------------------------------- */


/**
 * Obtain references to the parent classes of a certain class.
 * @param {Function} cls      An ES6 Class definition
 * @return {Function[]}       An array of parent Classes which the provided class extends
 */
function getParentClasses(cls:Function):Function[]
{
	if (typeof cls !== "function")
	{
		throw new Error("The provided class is not a type of Function");
	}
	const parents:Function[] = [];
	while (!!cls.name)
	{
		cls = Object.getPrototypeOf(cls);
		if (cls.name) parents.push(cls);
	}
	return parents;
}


/* -------------------------------------------- */


/**
 * A cheap data duplication trick, surprisingly relatively performant
 * @param {Object} original   Some sort of data
 */
function duplicate<T>(original:T):T
{
	return JSON.parse(JSON.stringify(original));
}

/* -------------------------------------------- */

/**
 * Learn the named type of a token - extending the functionality of typeof to recognize some core Object types
 * @param {*} token     Some passed token
 * @return {string}     The named type of the token
 */
function getType(token:any): "string" | "number" | "bigint" | "boolean" | "symbol" |
	"undefined" | "function" | "Object" | "HTMLElement" | "null" | "String" | "Number" | "Boolean" | "Array" | "Set"
{
	const tof = typeof token;
	if (tof === "object")
	{
		if (token === null) return "null";
		let cn = token.constructor.name;
		if (["String", "Number", "Boolean", "Array", "Set"].includes(cn)) return cn;
		else if (/^HTML/.test(cn)) return "HTMLElement";
		else return "Object";
	}
	return tof;
}

/* -------------------------------------------- */


/**
 * Filter the contents of some source object using the structure of a template object.
 * Only keys which exist in the template are preserved in the source object.
 *
 * @param {Object} source           An object which contains the data you wish to filter
 * @param {Object} template         An object which contains the structure you wish to preserve
 * @param {boolean} keepSpecial     Whether to keep special tokens like deletion keys
 * @param {boolean} templateValues  Instead of keeping values from the source, instead draw values from the template
 *
 * @example
 * const source = {foo: {number: 1, name: "Tim", topping: "olives"}, bar: "baz"};
 * const template = {foo: {number: 0, name: "Mit", style: "bold"}, other: 72};
 * filterObject(source, template); // {foo: {number: 1, name: "Tim"}};
 * filterObject(source, template, {templateValues: true}); // {foo: {number: 0, name: "Mit"}};
 */
function filterObject(source:any, template:any, { keepSpecial = false, templateValues = false } = {})
{

	// Validate input
	const ts = getType(source);
	const tt = getType(template);
	if ((ts !== "Object") || (tt !== "Object")) throw new Error("One of source or template are not Objects!");

	// Define recursive filtering function
	const _filter = function (s, t, filtered)
	{
		for (let [k, v] of Object.entries(s))
		{
			let has = t.hasOwnProperty(k);
			let x = t[k];

			// Case 1 - inner object
			if (has && (getType(v) === "Object") && (getType(x) === "Object"))
			{
				filtered[k] = _filter(v, x, {});
			}

			// Case 2 - inner key
			else if (has)
			{
				filtered[k] = templateValues ? x : v;
			}

			// Case 3 - special key
			else if (keepSpecial && k.startsWith("-="))
			{
				filtered[k] = v;
			}
		}
		return filtered;
	};

	// Begin filtering at the outer-most layer
	return _filter(source, template, {});
}


/* -------------------------------------------- */


/**
 * Flatten a possibly multi-dimensional object to a one-dimensional one by converting all nested keys to dot notation
 * @param {Object} obj  The object to flatten
 * @param {Number} _d   Recursion depth, to prevent overflow
 * @return {Object}     A flattened object
 */
function flattenObject(obj:any, _d = 0)
{
	const flat = {};
	if (_d > 10) throw new Error("Maximum depth exceeded");
	for (let [k, v] of Object.entries(obj))
	{
		let t = getType(v);

		// Inner objects
		if (t === "Object")
		{
			if (isObjectEmpty(v as {})) flat[k] = v;
			let inner = flattenObject(v, _d + 1);
			for (let [ik, iv] of Object.entries(inner))
			{
				flat[`${k}.${ik}`] = iv;
			}
		}

		// Inner values
		else flat[k] = v;
	}
	return flat;
}


/* -------------------------------------------- */


/**
 * Expand a flattened object to be a standard multi-dimensional nested Object by converting all dot-notation keys to
 * inner objects.
 *
 * @param {Object} obj  The object to expand
 * @param {Number} _d   Recursion depth, to prevent overflow
 * @return {Object}     An expanded object
 */
function expandObject(obj:any, _d = 0):any
{
	const expanded = {};
	if (_d > 10) throw new Error("Maximum depth exceeded");
	for (let [k, v] of Object.entries(obj))
	{
		if (v instanceof Object && !Array.isArray(v)) v = expandObject(v, _d + 1);
		setProperty(expanded, k, v);
	}
	return expanded;
}


/* -------------------------------------------- */

/**
 * A simple function to test whether or not an Object is empty
 * @param {Object} obj    The object to test
 * @return {Boolean}      Is the object empty?
 */
function isObjectEmpty(obj:{})
{
	if (getType(obj) !== "Object") throw new Error("The provided data is not an object!");
	return Object.keys(obj).length === 0;
}

/* -------------------------------------------- */

/**
 * Invert an object by assigning its values as keys and its keys as values.
 * @param {object} obj    The original object to invert
 * @returns {object}      The inverted object with keys and values swapped
 */
function invertObject(obj:{})
{
	const inverted = {};
	for (let [k, v] of Object.entries(obj))
	{
		if (v as any in inverted) throw new Error("The values of the provided object must be unique in order to invert it.");
		inverted[v as any] = k;
	}
	return inverted;
}

/* -------------------------------------------- */


/**
 * Update a source object by replacing its keys and values with those from a target object.
 *
 * @param {Object} original     The initial object which should be updated with values from the target
 * @param {Object} other        A new object whose values should replace those in the source
 *
 * @param {boolean} [insertKeys]      Control whether to insert new top-level objects into the resulting structure
 *                                    which do not previously exist in the original object.
 * @param {boolean} [insertValues]    Control whether to insert new nested values into child objects in the resulting
 *                                    structure which did not previously exist in the original object.
 * @param {boolean} [overwrite]       Control whether to replace existing values in the source, or only merge values
 *                                    which do not already exist in the original object.
 * @param {boolean} [recursive]       Control whether to merge inner-objects recursively (if true), or whether to
 *                                    simply replace inner objects with a provided new value.
 * @param {boolean} [inplace]         Control whether to apply updates to the original object in-place (if true),
 *                                    otherwise the original object is duplicated and the copy is merged.
 * @param {boolean} [enforceTypes]    Control whether strict type checking requires that the value of a key in the
 *                                    other object must match the data type in the original data to be merged.
 * @param {number} [_d]               A privately used parameter to track recursion depth.
 *
 * @returns {Object}            The original source object including updated, inserted, or overwritten records.
 *
 * @example <caption>Control how new keys and values are added</caption>
 * mergeObject({k1: "v1"}, {k2: "v2"}, {insertKeys: false}); // {k1: "v1"}
 * mergeObject({k1: "v1"}, {k2: "v2"}, {insertKeys: true});  // {k1: "v1", k2: "v2"}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {insertValues: false}); // {k1: {i1: "v1"}}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {insertValues: true}); // {k1: {i1: "v1", i2: "v2"}}
 *
 * @example <caption>Control how existing data is overwritten</caption>
 * mergeObject({k1: "v1"}, {k1: "v2"}, {overwrite: true}); // {k1: "v2"}
 * mergeObject({k1: "v1"}, {k1: "v2"}, {overwrite: false}); // {k1: "v1"}
 *
 * @example <caption>Control whether merges are performed recursively</caption>
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {recursive: false}); // {k1: {i1: "v2"}}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {recursive: true}); // {k1: {i1: "v1", i2: "v2"}}
 *
 * @example <caption>Deleting an existing object key</caption>
 * mergeObject({k1: "v1", k2: "v2"}, {"-=k1": null});   // {k2: "v2"}
 */
function mergeObject(original:{}, other = {}, {
	insertKeys = true,
	insertValues = true,
	overwrite = true,
	recursive = true,
	inplace = true,
	enforceTypes = false
} = {}, _d = 0)
{
	other = other || {};
	if (!(original instanceof Object) || !(other instanceof Object))
	{
		throw new Error("One of original or other are not Objects!");
	}
	let depth = _d + 1;

	// Maybe copy the original data at depth 0
	if (!inplace && (_d === 0)) original = duplicate(original);

	// Enforce object expansion at depth 0
	if ((_d === 0) && Object.keys(original).some(k => /\./.test(k))) original = expandObject(original);
	if ((_d === 0) && Object.keys(other).some(k => /\./.test(k))) other = expandObject(other);

	// Iterate over the other object
	for (let [k, v] of Object.entries(other))
	{
		let tv = getType(v);

		// Prepare to delete
		let toDelete = false;
		if (k.startsWith("-="))
		{
			k = k.slice(2);
			toDelete = (v === null);
		}

		// Get the existing object
		let x = original[k];
		let has = original.hasOwnProperty(k);
		let tx = getType(x);

		// Ensure that inner objects exist
		if (!has && (tv === "Object"))
		{
			x = original[k] = {};
			has = true;
			tx = "Object";
		}

		// Case 1 - Key exists
		if (has)
		{

			// 1.1 - Recursively merge an inner object
			if ((tv === "Object") && (tx === "Object") && recursive)
			{
				mergeObject(x, v as {}, {
					insertKeys: insertKeys,
					insertValues: insertValues,
					overwrite: overwrite,
					inplace: true,
					enforceTypes: enforceTypes
				}, depth);
			}

			// 1.2 - Remove an existing key
			else if (toDelete)
			{
				delete original[k];
			}

			// 1.3 - Overwrite existing value
			else if (overwrite)
			{
				if (tx && (tv !== tx) && enforceTypes)
				{
					throw new Error(`Mismatched data types encountered during object merge.`);
				}
				original[k] = v;
			}

			// 1.4 - Insert new value
			else if ((x === undefined) && insertValues)
			{
				original[k] = v;
			}
		}

		// Case 2 - Key does not exist
		else if (!toDelete)
		{
			let canInsert = (depth === 1 && insertKeys) || (depth > 1 && insertValues);
			if (canInsert) original[k] = v;
		}
	}

	// Return the object for use
	return original;
}


/* -------------------------------------------- */


/**
 * Deeply difference an object against some other, returning the update keys and values
 * @param {object} original     An object comparing data against which to compare.
 * @param {object} other        An object containing potentially different data.
 * @param {boolean} [inner]     Only recognize differences in other for keys which also exist in original.
 * @return {object}             An object of the data in other which differs from that in original.
 */
function diffObject(original, other, { inner = false } = {}): string[] | {}
{
	function _difference(v0, v1)
	{
		let t0 = getType(v0);
		let t1 = getType(v1);
		if (t0 !== t1) return [true, v1];
		if (t0 === "Array") return [!v0.equals(v1), v1];
		if (t0 === "Object")
		{
			if (isObjectEmpty(v0) !== isObjectEmpty(v1)) return [true, v1];
			let d = diffObject(v0, v1, { inner });
			return [!isObjectEmpty(d), d];
		}
		return [v0 !== v1, v1];
	}

	// Recursively call the _difference function
	return Object.keys(other).reduce((obj, key) =>
	{
		if (inner && (original[key] === undefined)) return obj;
		let [isDifferent, difference] = _difference(original[key], other[key]);
		if (isDifferent) obj[key] = difference;
		return obj;
	}, {});
}


/* -------------------------------------------- */


/**
 * A helper function which tests whether an object has a property or nested property given a string key.
 * The string key supports the notation a.b.c which would return true if object[a][b][c] exists
 * @param object {Object}   The object to traverse
 * @param key {String}      An object property with notation a.b.c
 *
 * @return {Boolean}        An indicator for whether the property exists
 */
function hasProperty(object: {}, key: string): boolean
{
	if (!key) return false;
	let target = object;
	for (let p of key.split('.'))
	{
		target = target || {};
		if (p in target) target = target[p];
		else return false;
	}
	return true;
}


/* -------------------------------------------- */


/**
 * A helper function which searches through an object to retrieve a value by a string key.
 * The string key supports the notation a.b.c which would return object[a][b][c]
 * @param object {Object}   The object to traverse
 * @param key {String}      An object property with notation a.b.c
 *
 * @return {*}              The value of the found property
 */
function getProperty(object:{}, key:string): {} | undefined
{
	if (!key) return undefined;
	let target = object;
	for (let p of key.split('.'))
	{
		target = target || {};
		if (p in target) target = target[p];
		else return undefined;
	}
	return target;
}


/* -------------------------------------------- */


/**
 * A helper function which searches through an object to assign a value using a string key
 * This string key supports the notation a.b.c which would target object[a][b][c]
 *
 * @param object {Object}   The object to update
 * @param key {String}      The string key
 * @param value             The value to be assigned
 *
 * @return {Boolean}        A flag for whether or not the object was updated
 */
function setProperty(object:{}, key:string, value:any): boolean
{
	let target = object;
	let changed = false;

	// Convert the key to an object reference if it contains dot notation
	if (key.indexOf('.') !== -1)
	{
		let parts = key.split('.');
		key = parts.pop()!;
		target = parts.reduce((o, i) =>
		{
			if (!o.hasOwnProperty(i)) o[i] = {};
			return o[i];
		}, object);
	}

	// Update the target
	if (target[key] !== value)
	{
		changed = true;
		target[key] = value;
	}

	// Return changed status
	return changed;
}


/* -------------------------------------------- */
/*  RegExp Helpers                              */
/* -------------------------------------------- */

interface RegExpConstructor
{
	escape(string:string): string;
}

RegExp.escape = function (string)
{
	return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};


/* -------------------------------------------- */
/*  URL Manipulation                            */
/* -------------------------------------------- */


/**
 * Encode a url-like string by replacing any characters which need encoding
 * @param {string} path     A fully-qualified URL or url component (like a relative path)
 * @return {string}         An encoded URL string
 */
function encodeURL(path:string):string
{

	// Determine whether the path is a well-formed URL
	let url:URL|null = null;
	try
	{
		url = new URL(path);
	} catch (err) { }

	// If URL, remove the initial protocol
	if (url) path = path.replace(url.protocol, "");

	// Split and encode each URL part
	path = path.split("/").map(p => encodeURIComponent(p).replace(/\'/g, "%27")).join("/");

	// Return the encoded URL
	return url ? url.protocol + path : path;
}


/* -------------------------------------------- */
/*  Datetime Manipulation
/* -------------------------------------------- */

declare var timeSince;

/**
 * Express a timestamp as a relative string
 * @param timeStamp {Date}
 * @return {string}
 */
timeSince = function (timeStamp)
{
	timeStamp = new Date(timeStamp);
	let now = new Date(),
		// @ts-ignore
		secondsPast = (now - timeStamp) / 1000,
		since:string | number = "";

	// Format the time
	if (secondsPast < 60)
	{
		since = parseInt(secondsPast);
		if (since <= 0) return "Now";
		else since = since + "s";
	}
	else if (secondsPast < 3600) since = parseInt(secondsPast / 60) + 'm';
	else if (secondsPast <= 86400) since = parseInt(secondsPast / 3600) + 'h';
	else
	{
		let hours = parseInt(secondsPast / 3600),
			days = parseInt(hours / 24);
		since = `${days}d ${hours % 24}h`;
	}

	// Return the string
	return since + " ago";
};

declare var debounce;

/**
 * Wrap a callback in a debounced timeout.
 * Delay execution of the callback function until the function has not been called for delay milliseconds
 * @param {Function} callback       A function to execute once the debounced threshold has been passed
 * @param {number} delay            An amount of time in milliseconds to delay
 * @return {Function}
 */
debounce = function (callback: Function, delay:number)
{
	let timeoutId;
	return function (...args)
	{
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() =>
		{
			callback.apply(this, args);
		}, delay);
	};
};


/* -------------------------------------------- */
/*  Colors
/* -------------------------------------------- */

/**
 * Converts an RGB color value to HSV. Conversion formula adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 1] and returns h, s, and v in the set [0, 1].
 * @param {number} r       The red color value
 * @param {number} g       The green color value
 * @param {number} b       The blue color value
 * @return {number[]}      The HSV representation
 */
function rgbToHsv(r:number, g:number, b:number):number[]
{
	let max = Math.max(r, g, b), min = Math.min(r, g, b);
	let h, s, v = max;
	let d = max - min;
	s = max === 0 ? 0 : d / max;
	if (max === min)
	{
		h = 0; // achromatic
	} else
	{
		switch (max)
		{
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	return [h, s, v];
}

/* -------------------------------------------- */

/**
 * Converts an HSV color value to RGB. Conversion formula adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and returns r, g, and b in the set [0, 1].
 * @param {number} h    The hue
 * @param {number} s    The saturation
 * @param {number} v    The value
 * @return {number[]}   The RGB representation
 */
function hsvToRgb(h:number, s:number, v:number):number[]
{
	let r:number, g:number, b:number;
	let i = Math.floor(h * 6);
	let f = h * 6 - i;
	let p = v * (1 - s);
	let q = v * (1 - f * s);
	let t = v * (1 - (1 - f) * s);
	switch (i % 6)
	{
		case 0: r = v, g = t, b = p; break;
		case 1: r = q, g = v, b = p; break;
		case 2: r = p, g = v, b = t; break;
		case 3: r = p, g = q, b = v; break;
		case 4: r = t, g = p, b = v; break;
		case 5: r = v, g = p, b = q; break;
	}
	return [r!, g!, b!];
}

/**
 * Converts a color as an [R, G, B] array of normalized floats to a hexadecimal number.
 * @param {Array.<Number>} rgb - Array of numbers where all values are normalized floats from 0.0 to 1.0.
 * @return {Number} Number in hexadecimal.
 */
function rgbToHex(rgb:Array<number>): number
{
	return (((rgb[0] * 255) << 16) + ((rgb[1] * 255) << 8) + (rgb[2] * 255 | 0));
}

/* ----------------------------------------- */

/**
 * Convert a hex color code to an RGB array
 * @param {number} hex    A hex color number
 * @return {Array}        An array of [r,g,b] colors normalized on the range of [0,1]
 */
function hexToRGB(hex:number): number[]
{
	return [
		((hex >> 16) & 0xFF) / 255,
		((hex >> 8) & 0xFF) / 255,
		(hex & 0xFF) / 255
	];
}

/* ----------------------------------------- */

/**
 * Convert a hex color code to an RGBA color string which can be used for CSS styling
 * @param {number} hex    A hex color number
 * @param {number} alpha  A level of transparency
 * @return {string}       An rgba style string
 */
function hexToRGBAString(hex:number, alpha = 1.0): string
{
	const rgb = hexToRGB(hex).map(h => h * 255);
	rgb.push(alpha);
	return `rgba(${rgb.join(", ")})`;
}

/* ----------------------------------------- */

/**
 * Convert a string color to a hex integer
 * @param {String} color    The string color
 * @return {Number}         The hexidecimal color code
 */
function colorStringToHex(color:string): number | null
{
	if (!color) return null;
	color = color.startsWith("#") ? color.substr(1) : color;
	return parseInt(color, 16);
}


/* -------------------------------------------- */
/*  Version Checking
/* -------------------------------------------- */

/**
 * Return whether or not a target version (v1) is more advanced than some other reference version (v0).
 * Supports either numeric or string version comparison with version parts separated by periods.
 * @param {number|string} v1    The target version
 * @param {number|string} v0    The reference version
 * @return {boolean}            Is v1 a more advanced version than v0?
 */
function isNewerVersion(v1:number|string, v0:number|string): boolean
{

	// Handle numeric versions
	if ((typeof v1 === "number") && (typeof v0 === "number")) return v1 > v0;

	// Handle string parts
	let v1Parts = String(v1).split(".");
	let v0Parts = String(v0).split(".");

	// Iterate over version parts
	for (let [i, p1] of v1Parts.entries())
	{
		let p0 = v0Parts[i];

		// If the prior version doesn't have a part, v1 wins
		if (p0 === undefined) return true;

		// If both parts are numbers, use numeric comparison to avoid cases like "12" < "5"
		if (Number.isNumeric(p0) && Number.isNumeric(p1))
		{
			if (Number(p1) !== Number(p0)) return Number(p1) > Number(p0);
		}

		// Otherwise, compare as strings
		else if (p1 < p0) return false;
	}

	// If there are additional parts to v0, it is not newer
	if (v0Parts.length > v1Parts.length) return false;

	// If we have not returned false by now, its either newer or the same
	return !v1Parts.equals(v0Parts);
}

/* -------------------------------------------- */

/**
 * Generate a random ID
 * Generate random number and convert it to base 36 and remove the '0.' at the beginning
 * As long as the string is not long enough, generate more random data into it
 * Use substring in case we generated a string with a length higher than the requested length
 *
 * @param {number} length    The length of the random ID to generate
 * @return {string}          Return a string containing random letters and numbers
 */
function randomID(length = 10): string
{
	const rnd = () => Math.random().toString(36).substr(2);
	let id = "";
	while (id.length < length)
		id += rnd();
	return id.substr(0, length);
}


/* -------------------------------------------- */


function benchmark(func:Function, iterations:number): void
{
	const start = performance.now();
	for (let i = 0; i < iterations; i++)
	{
		func();
	}
	const end = performance.now();
	const t = Math.round((end - start) * 100) / 100;
	console.log(`Evaluated function ${iterations} times | ${t} ms | ${t / iterations} per`);
}


/* -------------------------------------------- */
/*  URL Routing                                 */
/* -------------------------------------------- */

/**
 * Get the URL route for a certain path which includes a path prefix, if one is set
 * @param {string} path       The Foundry VTT URL path
 * @param {string|null} [prefix]   A path prefix to apply
 * @returns {string}          The absolute URL path
 */
function getRoute(path:string, { prefix = null }: {prefix?:string|null} = {}): string
{
	if (!prefix)
	{
		try
		{
			if (ROUTE_PREFIX) prefix = ROUTE_PREFIX;
		} catch (err) { }
	}
	path = path.replace(/(^[\/]+)|([\/]+$)/g, ""); // Strip leading and trailing slashes
	let paths = [""];
	if (prefix) paths.push(prefix);
	paths = paths.concat([path.replace(/(^\/)|(\/$)/g, "")]);
	return paths.join("/");
}
