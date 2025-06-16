import { describe, it, expect } from 'vitest';
import { ceil, floor, max, mean, min, round, sum } from './math';

describe('ceil', () => {
  it('올림 처리', () => {
    expect(ceil(1_555_555.12345)).toBe(1_555_556);
    expect(ceil(1_555_555.12345, 2)).toBe(1_555_555.13);
    expect(ceil(1_222_222.12345, -3)).toBe(1_223_000);
  });
});

describe('floor', () => {
  it('내림 처리', () => {
    expect(floor(1_999_999.12345)).toBe(1_999_999);
    expect(floor(1_999_999.12345, 2)).toBe(1_999_999.12);
    expect(floor(1_999_999.12345, -3)).toBe(1_999_000);
  });
});

describe('max', () => {
  it('최대값 반환', () => {
    expect(max([1, 2, 3, 4, 5])).toBe(5);
    expect(max([-1, -2, -3])).toBe(-1);
    expect(max([])).toBeUndefined();
  });
});

describe('mean', () => {
  it('평균값 반환', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3);
    expect(mean([10, 20])).toBe(15);
  });
});

describe('min', () => {
  it('최소값 반환', () => {
    expect(min([1, 2, 3, 4, 5])).toBe(1);
    expect(min([-1, -2, -3])).toBe(-3);
    expect(min([])).toBeUndefined();
  });
});

describe('round', () => {
  it('반올림 처리', () => {
    expect(round(1_555_555.12345)).toBe(1_555_555);
    expect(round(1_555_555.12345, 2)).toBe(1_555_555.12);
    expect(round(1_222_222.12345, -3)).toBe(1_222_000);
  });
});

describe('sum', () => {
  it('합계 반환', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
    expect(sum([-1, 1])).toBe(0);
    expect(sum([])).toBe(0);
  });
});
