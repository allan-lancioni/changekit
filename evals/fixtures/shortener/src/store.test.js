import { test } from 'node:test';
import assert from 'node:assert';
import { put, get } from './store.js';

test('round trips a link', () => {
  put('a', 'https://x.dev');
  assert.equal(get('a'), 'https://x.dev');
});
