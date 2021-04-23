import * as PIXI from 'pixi.js';

/* ----------------------------------------- */
/*  Reusable Type Definitions                */
/* ----------------------------------------- */


/**
 * A single point, expressed as an object {x, y}
 */
export type Point = PIXI.Point | {x: number, y: number};

/**
 * A single point, expressed as an array [x,y]
 */
export type PointArray = number[];

/**
 * A Ray intersection point
 * @property [wall] Wall
 */
export type RayIntersection = {x: number, y: number, t0: number, t1: number}|null;

/**
 * A standard rectangle interface.
 * @typedef {} Rectangle
 */
export type Rectangle = PIXI.Rectangle | {x: number, y: number, width: number, height: number};

/* ----------------------------------------- */
/*  Database Workflows                       */
/* ----------------------------------------- */

/**
 * The expected structure for a Data record
 * @property [_id] string
 */

export type Data = string | any;

/**
 * An object of optional keys and values which configure the behavior of a function
 */
 export type Options = string | any;
