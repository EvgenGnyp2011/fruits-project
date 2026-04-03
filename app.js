const fruits = [
  '🍎 Яблуко',
  '🍌 Банан',
  '🍊 Апельсин',
  '🍇 Виноград',
  '🍓 Полуниця',
];

const cards = fruits.map(function(fruit) {
  return `<div class="fruit-card">${fruit}</div>`;
});

document.getElementById('fruits').innerHTML = cards.join('');