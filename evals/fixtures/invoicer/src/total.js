export function total(items) {
  const sum = items.reduce((a, i) => a + i.price * i.qty, 0);
  return Math.round(sum * 100) / 100;
}
