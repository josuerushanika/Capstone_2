const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7rRrAwWX4QCKCE1UcfQn/likes';

const getLikes = async (abc) => {
  abc.forEach((e, idxx) => {
    const likes = async () => {
      const response = await fetch(likesUrl);
      const data = response.json();
      return data;
    };
    likes().then((showlikes) => {
      showlikes.forEach((data) => {
        if (idxx === data.item_id) {
          const like = e.querySelector('.dynLike');
          like.innerText = data.likes;
        }
      });
    });
  });
};

export default getLikes;