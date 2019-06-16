import {isArray, isBoolean, isDateObject, isNumber, isString} from "./type-guards.utils";

describe('type-guards 헬퍼 함수에 대해', () => {
  test('isString은 정상적으로 string에 대한 타입체크를 해주는가', () => {
    expect(isString("abcde")).toBe(true);
    expect(isString(12345)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
  test('isNumber는 정상적으로 number에 대한 타입체크를 해주는가', () => {
    expect(isNumber("abcde")).toBe(false);
    expect(isNumber(1234)).toBe(true);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
  test('isDateObject는 정상적으로 Date 객체애 대한 타입체크를 해주는가', () => {
    expect(isDateObject("abcde")).toBe(false);
    expect(isDateObject(12345)).toBe(false);
    expect(isDateObject(null)).toBe(false);
    expect(isDateObject(undefined)).toBe(false);
    expect(isDateObject({})).toBe(false);
    expect(isDateObject([])).toBe(false);
    expect(isDateObject(new Date())).toBe(true);
  });
  test('isArray는 정상적으로 array에 대한 타입체크를 해주는가', () => {
    expect(isArray("abcde")).toBe(false);
    expect(isArray(12345)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray([])).toBe(true);
    expect(isArray([1,2,3,4])).toBe(true);
    expect(isArray(new Array())).toBe(true);
    expect(isArray(new Array(1,2,3,4))).toBe(true);
  });
  test('isBoolean는 정상적으로 boolean에 대한 타입체크를 해주는가', () => {
    expect(isBoolean("abcde")).toBe(false);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(12345)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean([1,2,3,4])).toBe(false);
    expect(isBoolean(new Array())).toBe(false);
    expect(isBoolean(new Array(1,2,3,4))).toBe(false);
  });
});
