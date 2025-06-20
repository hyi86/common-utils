import { describe, it, expect } from 'vitest';
import { clamp, random, zerofill, format } from '../src/number';

describe('clamp', () => {
  it('최소/최대값으로 제한', () => {
    expect(clamp(120, 50, 100)).toBe(100);
    expect(clamp(10, 15, 20)).toBe(15);
    expect(clamp(17, 10, 20)).toBe(17);
  });
});

describe('random', () => {
  it('기본값: 0 또는 1', () => {
    const val = random(0, 1);
    expect([0, 1]).toContain(val);
  });
  it('범위 내 정수 반환', () => {
    const val = random(0, 5);
    expect(val).toBeGreaterThanOrEqual(0);
    expect(val).toBeLessThanOrEqual(5);
  });
  it('floating true면 실수 반환', () => {
    const val = random(1.2, 5.2, true);
    expect(val).toBeGreaterThanOrEqual(1.2);
    expect(val).toBeLessThanOrEqual(5.2);
    expect(Number.isInteger(val)).toBe(false);
  });
});

describe('zerofill', () => {
  it('자릿수만큼 0으로 채움', () => {
    expect(zerofill(35, 2)).toBe('35');
    expect(zerofill(7, 3)).toBe('007');
    expect(zerofill(37, 4)).toBe('0037');
    expect(zerofill(799, 2)).toBe('799');
  });
});

describe('format', () => {
  it('숫자 포맷팅', () => {
    expect(format(999_999.999)).toBe('999,999.999');
    expect(format(999_999, -3)).toBe('999,000');
    expect(format(999_999.999, 1)).toBe('999,999.9');
  });
});
