import getShow from './getShow.js';
import likeBtn from '../assets/like-btn.png';

const displayDOM = async () => {
  let output = '';
  const main = document.querySelector('.main-wrapper');
  const allShows = await getShow();
  const shows = allShows.splice(150, 20);
  shows.forEach((show, index) => {
    output += `
    <div class="movie-box">
    <span class="title">${index + 1} ${show.name}</span>
      <img src=${show.image.medium} alt="movie-img" class="movie-img">
      <div class="like-line">Likes
        <img src=${likeBtn} alt="like -img" class="like-img">
      </div>
      <button class="comment-btn">Comment</button>
    </div>
     
      `;
  });
  main.innerHTML = output;
};

export default displayDOM;