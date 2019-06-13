/* tslint:disable no-any ban-types */
export const isString = (target: any): target is string => typeof target === "string";
export const isNumber = (target: any): target is number => typeof target === "number";
export const isDateObject = (target: any): target is Date => target instanceof Date;
export const isArray = (target: any): target is any[] => target instanceof Array;
export const isBoolean = (target: any): target is boolean => typeof target === "boolean";
export const isFunction = (target: any): target is Function => typeof target === "function";
