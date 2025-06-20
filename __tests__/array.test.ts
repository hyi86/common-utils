import { describe, it, expect } from 'vitest';
import { chunk, difference, differenceFrom, range, intersection, sortedUniq, union, uniq, move } from '../src/array';

describe('chunk', () => {
  it('배열을 청크로 분할한다', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(chunk([], 2)).toEqual([]);
    expect(chunk([1, 2, 3, 4], 0)).toEqual([]);
  });
});

describe('difference', () => {
  it('두 배열의 차집합을 반환한다', () => {
    expect(difference([1, 2, 3, 4], [3, 4, 5])).toEqual([1, 2]);
    expect(difference([1, 2], [1, 2])).toEqual([]);
    expect(difference([], [1, 2])).toEqual([]);
  });
});

describe('differenceFrom', () => {
  it('양방향 차집합을 반환한다', () => {
    expect(differenceFrom([1, 2, 3, 4], [3, 4, 5])).toEqual([1, 2, 5]);
    expect(differenceFrom([1, 2], [1, 2])).toEqual([]);
    expect(differenceFrom([], [1, 2])).toEqual([1, 2]);
  });
});

describe('range', () => {
  it('범위 배열을 생성한다', () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
    expect(range(-4)).toEqual([0, -1, -2, -3]);
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
    expect(range(0, -4, -1)).toEqual([0, -1, -2, -3]);
    expect(range(1, 4, 0)).toEqual([1, 1, 1]);
    expect(range(0)).toEqual([]);
  });
});

describe('intersection', () => {
  it('교집합을 반환한다', () => {
    expect(intersection([1, 2, 3, 4], [3, 4, 5])).toEqual([3, 4]);
    expect(intersection([1, 2], [3, 4])).toEqual([]);
    expect(intersection([], [1, 2])).toEqual([]);
  });
});

describe('sortedUniq', () => {
  it('중복 제거 및 정렬', () => {
    expect(sortedUniq([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(sortedUniq([3, 2, 1, 2, 3])).toEqual([1, 2, 3]);
    expect(sortedUniq([])).toEqual([]);
  });
});

describe('union', () => {
  it('배열 합치기 및 중복 제거', () => {
    expect(union([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(union([])).toEqual([]);
  });
});

describe('uniq', () => {
  it('배열 중복 제거', () => {
    expect(uniq([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(uniq([1, 1, 1, 1])).toEqual([1]);
    expect(uniq([])).toEqual([]);
  });
});

describe('move', () => {
  it('배열의 위치를 이동한다', () => {
    expect(move([1, 2, 3, 4], 2, 1)).toEqual([1, 3, 2, 4]);
    expect(move([1, 2, 3, 4], 3, 0)).toEqual([4, 1, 2, 3]);
    expect(move([1, 2, 3, 4], 10, 0)).toEqual([1, 2, 3, 4]);
  });
});
