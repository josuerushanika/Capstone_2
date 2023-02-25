import { postComments, getComments } from './commentApi.js';
import commentCount from './totalComment.js';

async function getAllComments(id) {
  const response = await getComments(id);
  const comments = await response.json();
  return comments;
}

const displayComments = (data) => {
  const table = document.querySelector('.table');
  const commentSpan = document.querySelector('.commentspan');
  if (data.length) {
    let tableHTML = '';
    data.forEach(({ username, comment, creationDate }) => {
      tableHTML += `<tr>
        <td class="username">${username}</td>
        <td class="comment">${comment}</td>
        <td class="creation_date">${creationDate}</td>
      </tr>`;
    });
    table.innerHTML = tableHTML;
    commentCount(table, commentSpan);
  }
};

const getAllComment = async (id) => {
  const table = document.querySelector('.table');
  const commentSpan = document.querySelector('.commentspan');
  const data = await getComments(id);
  if (data.length) {
    data.forEach(({ username, comment, creationDate }) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="username">${username}</td>
      <td class="comment">${comment}</td>
      <td class="creation_date">${creationDate}</td> `;
      table.appendChild(tr);
    });
    commentCount(table, commentSpan);
  }
};

const sendComment = (id, username, usercomment) => {
  if (username && usercomment) {
    const res = postComments(`item${id}`, username, usercomment);
    return res;
  }
  return id;
};

export {
  sendComment, getAllComment, getAllComments, displayComments,
};