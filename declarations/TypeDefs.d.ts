import * as PIXI from 'pixi.js';
/**
 * A single point, expressed as an object {x, y}
 */
export declare type Point = PIXI.Point | {
    x: number;
    y: number;
};
/**
 * A single point, expressed as an array [x,y]
 */
export declare type PointArray = number[];
/**
 * A Ray intersection point
 * @property [wall] Wall
 */
export declare type RayIntersection = {
    x: number;
    y: number;
    t0: number;
    t1: number;
} | null;
/**
 * A standard rectangle interface.
 * @typedef {} Rectangle
 */
export declare type Rectangle = PIXI.Rectangle | {
    x: number;
    y: number;
    width: number;
    height: number;
};
/**
 * The expected structure for a Data record
 * @property [_id] string
 */
export declare type Data = string | any;
/**
 * An object of optional keys and values which configure the behavior of a function
 */
export declare type Options = string | any;
