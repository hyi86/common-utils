import { describe, it, expect, vi } from 'vitest';
import { delay, once, debounceAsync } from '../src/fn';

describe('delay', () => {
  it('ms만큼 지연 후 resolve된다', async () => {
    const start = Date.now();
    await delay(50);
    expect(Date.now() - start).toBeGreaterThanOrEqual(50);
  });
});

describe('once', () => {
  it('한 번만 실행된다', () => {
    const fn = vi.fn((a, b) => a + b);
    const wrapped = once(fn);
    expect(wrapped(1, 2)).toBe(3);
    expect(wrapped(2, 3)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe('debounceAsync', () => {
  it('지정한 시간 이후 1회만 실행된다', async () => {
    vi.useFakeTimers();
    const fn = vi.fn(async (x) => x * 2);
    const debounced = debounceAsync(fn, 100);
    debounced(2);
    debounced(3);
    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });
});
