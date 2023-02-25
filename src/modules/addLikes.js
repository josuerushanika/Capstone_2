const addLike = async () => {
  const likeBtns = document.querySelectorAll('.like-img');
  likeBtns.forEach((btn, indx) => {
    btn.addEventListener('click', async () => {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7rRrAwWX4QCKCE1UcfQn/likes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ item_id: indx }),
      })
        .then(() => true)
        .catch(() => false);
      const likeDiv = document.querySelectorAll('.dynLike');
      likeDiv[indx].innerHTML = parseInt(likeDiv[indx].innerHTML, 10) + 1;
      return response;
    });
  });
};

export default addLike;
