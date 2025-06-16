import { describe, it, expect } from 'vitest';
import {
  createOneWayHash,
  createTwoWayEncryption,
  createTwoWayDecryption,
  generateRsaKeyPair,
  encryptWithRsaPublicKey,
  decryptWithRsaPrivateKey,
  encryptWithRsaPrivateKey,
  decryptWithRsaPublicKey,
} from './encrypt';

describe('createOneWayHash', () => {
  it('동일 입력에 대해 동일 해시를 반환한다', () => {
    const hash1 = createOneWayHash('test', 'salt');
    const hash2 = createOneWayHash('test', 'salt');
    expect(hash1).toBe(hash2);
    expect(hash1).toHaveLength(64);
  });
  it('다른 입력에 대해 다른 해시를 반환한다', () => {
    const hash1 = createOneWayHash('test', 'salt1');
    const hash2 = createOneWayHash('test', 'salt2');
    expect(hash1).not.toBe(hash2);
  });
});

describe('createTwoWayEncryption & createTwoWayDecryption', () => {
  it('암호화한 값을 복호화하면 원본과 같다', () => {
    const salt = 'my_secret_key';
    const text = '암호화할 텍스트';
    const encrypted = createTwoWayEncryption(text, salt);
    const decrypted = createTwoWayDecryption(encrypted, salt);
    expect(decrypted).toBe(text);
  });
  it('잘못된 키로 복호화하면 null을 반환한다', () => {
    const text = 'test';
    const encrypted = createTwoWayEncryption(text, 'key1');
    expect(createTwoWayDecryption(encrypted, 'key2')).toBeNull();
  });
  it('잘못된 포맷 입력시 null을 반환한다', () => {
    expect(createTwoWayDecryption('invalid', 'key')).toBeNull();
  });
});

describe('RSA 비대칭 암호화/복호화', () => {
  it('publicKey로 암호화, privateKey로 복호화', async () => {
    const { publicKey, privateKey } = await generateRsaKeyPair();
    const text = 'hello rsa';
    const encrypted = encryptWithRsaPublicKey(text, publicKey);
    const decrypted = decryptWithRsaPrivateKey(encrypted, privateKey);
    expect(decrypted).toBe(text);
  });
  it('privateKey로 암호화, publicKey로 복호화', async () => {
    const { publicKey, privateKey } = await generateRsaKeyPair();
    const text = 'hello private';
    const encrypted = encryptWithRsaPrivateKey(text, privateKey);
    const decrypted = decryptWithRsaPublicKey(encrypted, publicKey);
    expect(decrypted).toBe(text);
  });
  it('잘못된 키로 복호화 시 에러 발생', async () => {
    const { publicKey, privateKey } = await generateRsaKeyPair();
    const { publicKey: publicKey2 } = await generateRsaKeyPair();
    const text = 'fail test';
    const encrypted = encryptWithRsaPrivateKey(text, privateKey);
    // 잘못된 publicKey로 복호화 시 에러 발생
    expect(() => decryptWithRsaPublicKey(encrypted, publicKey2)).toThrow();
  });
});
