const commentCount = (Table, span) => {
  const table = document.querySelector('.table');
  const rows = table.querySelectorAll('tr');
  const count = rows.length - 1;
  span.innerText = `${count} comments for this Show`;
  return count;
};

export default commentCount;
