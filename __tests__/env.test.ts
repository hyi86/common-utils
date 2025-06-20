import { describe, it, expect } from 'vitest';
import { parseEnvToJson, convertJsonToEnv } from '../src/env';

describe('parseEnvToJson', () => {
  it('env 문자열을 JSON 객체로 변환한다', () => {
    const env = `FOO=bar\nBAR=123\n# 주석\nBAZ='hello world'\nQUX="abc=def"`;
    expect(parseEnvToJson(env)).toEqual({
      FOO: 'bar',
      BAR: '123',
      BAZ: 'hello world',
      QUX: 'abc=def',
    });
  });
  it('빈 줄, 주석, 잘못된 줄을 무시한다', () => {
    const env = `\n# 주석\nFOO=bar\n\nBAR=\n`;
    expect(parseEnvToJson(env)).toEqual({ FOO: 'bar', BAR: '' });
  });
});

describe('convertJsonToEnv', () => {
  it('JSON 객체를 env 문자열로 변환한다', () => {
    const json = { FOO: 'bar', BAR: '123', BAZ: 'hello world' };
    expect(convertJsonToEnv(json)).toBe('FOO=bar\nBAR=123\nBAZ=hello world');
  });
  it('빈 객체는 빈 문자열을 반환한다', () => {
    expect(convertJsonToEnv({})).toBe('');
  });
});
