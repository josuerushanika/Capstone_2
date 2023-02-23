import getShow from './getShow.js';
import likeBtn from '../assets/like-btn.png';

import movieCount from './totalMovies.js';
import fetchData from './popUp.js';

const Movies = document.querySelector('.main-wrapper');

const displayDOM = async () => {
  let output = '';
  const main = document.querySelector('.main-wrapper');
  const allShows = await getShow();
  const shows = allShows.splice(150, 20);
  shows.forEach((show, index) => {

    output = `

    <div class="movie-box">
    <span class="title">${index + 1} ${show.name}</span>
      <img src=${show.image.medium} alt="movie-img" class="movie-img">
      <div class="like-line">Likes
        <img src=${likeBtn} alt="like -img" class="like-img">
      </div>

      <div id="btn-ctn">
      <button id="${show.name}" data-index="${show.id}" class="comment">comment</button>
      </div>
    </div>
     
      `;
    main.innerHTML += output;
    const num = document.querySelector('#movie-counter');

    movieCount(Movies, num);
  });
  fetchData();

      <button class="comment-btn">Comment</button>
    </div>
     
      `;
  });
  main.innerHTML = output;

};

export default displayDOM;