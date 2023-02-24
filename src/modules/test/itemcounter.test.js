/**
 * @jest-environment jsdom
 */

import commentCount from '../totalComment.js';

describe('commentCount', () => {
  let table;
  let span;

  beforeEach(() => {
    table = document.createElement('table');
    table.classList.add('table');
    table.innerHTML = `
      <tr>
        <td class="username">username</td>
        <td class="comment">comment</td>
        <td class="creation_date">creationDate</td>
      </tr>

      <tr>
        <td class="username">josue</td>
        <td class="comment">Nice Movie</td>
        <td class="creation_date">February2023</td>
      </tr>

      <tr>
        <td class="username">Freempong</td>
        <td class="comment">Great Show</td>
        <td class="creation_date">February2023</td>
      </tr>
    `;
    document.body.appendChild(table);

    span = document.createElement('span');
    document.body.appendChild(span);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('updates the innerText of the span element with accurate comment count', () => {
    commentCount(table, span);
    expect(span.innerText).toBe('2 comments for this Show');
  });
});