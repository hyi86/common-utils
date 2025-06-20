import { describe, it, expect } from 'vitest';
import { buildTree, flattenTree, getAllFolderPaths } from '../src/tree';

describe('buildTree', () => {
  it('경로 배열로 트리 구조를 만든다', () => {
    const routes = ['/a', '/a/b', '/a/b/c', '/d'];
    const tree = buildTree(routes);
    expect(tree).toMatchSnapshot();
  });
});

describe('flattenTree', () => {
  it('트리 구조를 평탄화한다', () => {
    const tree = [
      {
        path: '/a',
        name: 'a',
        hasPath: true,
        children: [
          {
            path: '/a/b',
            name: 'b',
            hasPath: true,
            children: [],
          },
        ],
      },
    ];
    expect(flattenTree(tree)).toEqual([
      { path: '/a', name: 'a', hasPath: true },
      { path: '/a/b', name: 'b', hasPath: true },
    ]);
  });
});

describe('getAllFolderPaths', () => {
  it('트리에서 폴더 경로만 추출', () => {
    const tree = [
      {
        path: '/a',
        name: 'a',
        hasPath: true,
        children: [
          {
            path: '/a/b',
            name: 'b',
            hasPath: true,
            children: [],
          },
        ],
      },
      {
        path: '/d',
        name: 'd',
        hasPath: true,
        children: [],
      },
    ];
    expect(getAllFolderPaths(tree)).toEqual(['/a']);
  });
});
