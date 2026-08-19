import { test } from 'node:test';
import assert from 'node:assert';
import { total } from './total.js';

test('sums line items', () => {
  assert.equal(total([{ price: 10, qty: 2 }, { price: 5.5, qty: 1 }]), 25.5);
});
