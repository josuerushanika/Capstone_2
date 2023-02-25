import getData from './api.js';
import { sendComment, getAllComment } from './fetchComment.js';
import commentCount from './totalComment.js';

const closePopup = (container) => {
  const cancelBtn = document.querySelector('.cancel');
  cancelBtn.addEventListener('click', () => {
    container.innerHTML = '';
  });
};

const renderPopup = (dataObj) => {
  const container = document.querySelector('.alert');
  container.innerHTML += `
    <div class="popup">
      <div class="content">
        <div class="part">
          <i class="fa-solid fa-x close fa-2x cancel" aria-hidden="true">x</i>
          <img class="popImage" src="${dataObj.image.medium}"/>
          <p class="namepop">${dataObj.name}</p>
          <div id="${dataObj.id}">
            <span class="commentspan"></span>
            <table class="table">
              <tr>
                <td>username</td>
                <td>comment</td>
              </tr>
            </table>
          </div>
          <form id="form">
            <h2>Add Comment</h2><br>
            <input type="text" id="username" placeholder="Your name" required/>
            <textarea rows="5" id="usercomment" placeholder="Your comment" required></textarea>
            <button class="btnSubmit" id="item${dataObj.id}" type="submit">Comment</button>
          </form>
        </div>
      </div>
    </div>
  `;
  const form = document.querySelector('#form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const table = document.querySelector('.table');
    const rows = table.querySelectorAll('tr');
    const count = rows.length - 1;
    const commentSpan = document.querySelector('.commentspan');
    const name = document.querySelector('#username');
    const comment = document.querySelector('#usercomment');
    const username = name.value;
    const usercomment = comment.value;
    await sendComment(parseInt(dataObj.id, 10), username, usercomment);
    table.innerHTML = '';
    getAllComment(parseInt(dataObj.id, 10));
    form.reset();
    commentSpan.innerText = `${count + 1} comments for this Show`;
  });
  getAllComment(parseInt(dataObj.id, 10));
  closePopup(container);
};

const fetchData = async () => {
  const data = await getData();
  const res = data.splice(150, 20);

  const btn = document.querySelectorAll('.comment');
  btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      const dataObj = res.find((resObj) => parseInt(resObj.id, 10) === parseInt(index, 10));
      renderPopup(dataObj);
    });
  });
};

export default fetchData;
