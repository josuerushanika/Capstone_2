import getShow from './getShow.js';
import likeBtn from '../assets/like-btn.png';
import getLikes from './getLikes.js';
import movieCount from './totalMovies.js';
import fetchData from './popUp.js';

const displayDOM = async () => {
  let output = '';
  const main = document.querySelector('.main-wrapper');
  const allShows = await getShow();
  const shows = allShows.splice(150, 20);

  shows.forEach((show) => {
    output = `
    <div class="movie-box">
      <img src=${show.image.medium} alt="movie-img" class="movie-img">
      <div class="like-line">
      <span class="title">${show.name}</span>
      <span class="dynLike"></span>
      <span class="">Likes</span>
      <img src=${likeBtn} alt="like -img" class="like-img">
      </div>
      <div id="btn-ctn">
      <button id="${show.name}" data-index="${show.id}" class="comment">comment</button>
      </div>
    </div>
      `;
    main.innerHTML += output;
    const movie = document.querySelectorAll('.movie-box');
    const num = document.querySelector('#movie-counter');
    getLikes(movie);
    movieCount(main, num);
  });

  fetchData();
};

export default displayDOM;
