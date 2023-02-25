/**
 * @jest-environment jsdom
 */

import movieCount from '../totalMovies.js';

describe('movieCount', () => {
  const movies = document.createElement('ul');
  movies.innerHTML = `
    <li>Movie 1</li>
    <li>Movie 2</li>
    <li>Movie 3</li>
  `;
  const num = document.createElement('span');

  test('returns an array of items', () => {
    const items = movieCount(movies, num);
    expect(Array.isArray(items)).toBe(true);
  });

  test('updates the innerText of the num element', () => {
    movieCount(movies, num);
    expect(num.innerText).toContain('3');
  });
});