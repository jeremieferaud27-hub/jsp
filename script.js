const folders = document.querySelectorAll('.folder');

folders.forEach(folder => {
  const head = folder.querySelector('.folder-head');
  const content = folder.querySelector('.folder-content');

  head.addEventListener('click', () => {
    folder.classList.toggle('open');
  });
});
