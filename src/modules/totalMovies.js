const movieCount = (Movies, num) => {
  const items = Array.from(Movies.children);
  num.innerText = `TV SHOWS (${items.length})`;
  return items;
};

export default movieCount;